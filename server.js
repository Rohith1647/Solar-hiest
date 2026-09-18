const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = __dirname;
const LEADERBOARD_FILE = path.join(ROOT, 'leaderboard.json');

// Admin credentials
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'solar';
const ADMIN_TOKEN = 'vault-admin-secret-token-2026';

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

// Helper: Read Leaderboard JSON
function readLeaderboard() {
    try {
        if (fs.existsSync(LEADERBOARD_FILE)) {
            const data = fs.readFileSync(LEADERBOARD_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (err) {
        console.error('Error reading leaderboard file:', err);
    }
    return {};
}

// Helper: Save Leaderboard JSON
function saveLeaderboard(data) {
    try {
        fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error('Error writing leaderboard file:', err);
        return false;
    }
}

// Helper: Parse JSON Body
function parseJsonBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(err);
            }
        });
        req.on('error', err => reject(err));
    });
}

const server = http.createServer(async (req, res) => {
    // Parse URL
    let reqUrl;
    try {
        reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    } catch {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: '400 Bad Request' }));
        return;
    }

    let reqPath = decodeURIComponent(reqUrl.pathname);

    // --- API ROUTES ---
    if (reqPath.startsWith('/api/')) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

        if (req.method === 'OPTIONS') {
            res.writeHead(204);
            res.end();
            return;
        }

        // GET /api/leaderboard
        if (reqPath === '/api/leaderboard' && req.method === 'GET') {
            const leaderboard = readLeaderboard();
            res.writeHead(200);
            res.end(JSON.stringify({ success: true, leaderboard }));
            return;
        }

        // POST /api/complete
        if (reqPath === '/api/complete' && req.method === 'POST') {
            try {
                const body = await parseJsonBody(req);
                const { teamId, teamName, completionTime } = body;
                if (!teamId || !completionTime) {
                    res.writeHead(400);
                    res.end(JSON.stringify({ success: false, message: 'Missing teamId or completionTime' }));
                    return;
                }

                const leaderboard = readLeaderboard();
                leaderboard[teamId] = {
                    teamId: teamId.toString(),
                    teamName: teamName || `Team ${teamId}`,
                    completionTime,
                    timestamp: new Date().toISOString()
                };
                saveLeaderboard(leaderboard);

                res.writeHead(200);
                res.end(JSON.stringify({ success: true, leaderboard }));
            } catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({ success: false, message: 'Invalid JSON payload' }));
            }
            return;
        }

        // POST /api/admin/login
        if (reqPath === '/api/admin/login' && req.method === 'POST') {
            try {
                const body = await parseJsonBody(req);
                const { username, password } = body;

                if (username === ADMIN_USER && password === ADMIN_PASS) {
                    res.writeHead(200);
                    res.end(JSON.stringify({ success: true, token: ADMIN_TOKEN }));
                } else {
                    res.writeHead(401);
                    res.end(JSON.stringify({ success: false, message: 'Invalid username or password' }));
                }
            } catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({ success: false, message: 'Invalid payload' }));
            }
            return;
        }

        // POST /api/admin/update-time
        if (reqPath === '/api/admin/update-time' && req.method === 'POST') {
            try {
                const body = await parseJsonBody(req);
                const { token, teamId, completionTime } = body;

                if (token !== ADMIN_TOKEN) {
                    res.writeHead(403);
                    res.end(JSON.stringify({ success: false, message: 'Unauthorized' }));
                    return;
                }

                const leaderboard = readLeaderboard();
                if (leaderboard[teamId]) {
                    leaderboard[teamId].completionTime = completionTime;
                    saveLeaderboard(leaderboard);
                    res.writeHead(200);
                    res.end(JSON.stringify({ success: true, leaderboard }));
                } else {
                    res.writeHead(404);
                    res.end(JSON.stringify({ success: false, message: 'Team record not found' }));
                }
            } catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({ success: false, message: 'Invalid payload' }));
            }
            return;
        }

        // POST /api/admin/delete
        if (reqPath === '/api/admin/delete' && req.method === 'POST') {
            try {
                const body = await parseJsonBody(req);
                const { token, teamId } = body;

                if (token !== ADMIN_TOKEN) {
                    res.writeHead(403);
                    res.end(JSON.stringify({ success: false, message: 'Unauthorized' }));
                    return;
                }

                const leaderboard = readLeaderboard();
                if (leaderboard[teamId]) {
                    delete leaderboard[teamId];
                    saveLeaderboard(leaderboard);
                    res.writeHead(200);
                    res.end(JSON.stringify({ success: true, leaderboard }));
                } else {
                    res.writeHead(404);
                    res.end(JSON.stringify({ success: false, message: 'Team record not found' }));
                }
            } catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({ success: false, message: 'Invalid payload' }));
            }
            return;
        }

        // POST /api/admin/reset
        if (reqPath === '/api/admin/reset' && req.method === 'POST') {
            try {
                const body = await parseJsonBody(req);
                const { token } = body;

                if (token !== ADMIN_TOKEN) {
                    res.writeHead(403);
                    res.end(JSON.stringify({ success: false, message: 'Unauthorized' }));
                    return;
                }

                saveLeaderboard({});
                res.writeHead(200);
                res.end(JSON.stringify({ success: true, leaderboard: {} }));
            } catch (err) {
                res.writeHead(400);
                res.end(JSON.stringify({ success: false, message: 'Invalid payload' }));
            }
            return;
        }

        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Endpoint not found' }));
        return;
    }

    // --- STATIC FILES ROUTING ---
    if (reqPath === '/' || reqPath === '') {
        reqPath = '/index.html';
    }

    const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
    const filePath = path.join(ROOT, safePath);

    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        });

        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
        stream.on('error', (streamErr) => {
            console.error('Stream error:', streamErr);
            if (!res.headersSent) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error');
            }
        });
    });
});

server.listen(PORT, HOST, () => {
    console.log('====================================================');
    console.log('  The Vault Web Server is running!');
    console.log(`  Local:            http://localhost:${PORT}`);
    console.log(`  Loopback IP:      http://127.0.0.1:${PORT}`);
    console.log('====================================================');
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('====================================================');
        console.log(`  Port ${PORT} is already in use.`);
        console.log(`  Local:            http://localhost:${PORT}`);
        console.log('====================================================');
        process.exit(0);
    } else {
        console.error('Server error:', err);
        process.exit(1);
    }
});
