// Configuration for the Teams and their specific puzzles/keys
// Each team has 4 challenges: logical (Digit 1), visual+image (Digit 2), physical (Digit 3), vaultKey (Digit 4)
// All vault codes are 4 digits.
const teamsConfig = {
    1: {
        name: "Team 1",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: C→F, F→B, B NOT→G, B→A, D NOT→E. Path passes through exactly 4 terminals. Find the unique path starting at C. Answer = value of LAST terminal.",
        visual: "Tank filled by A & B, drained by C. A alone: 20hrs, B alone: 30hrs, C alone empties: 60hrs. All three run together, but every 4hrs C is shut for 1hr (A&B keep running). How many complete hours to fill? (If >9, give last digit.)",
        physical: "Priya starts facing North: Walks 9km(N). Turn left, 2km. Turn left, 4km. Turn right, 9km. Turn left, 5km. Turn left, 4km. Shortest distance (km, rounded) from start? (If >9, give last digit.)",
        vaultKey: "Vessel has milk:water = 5:3. Remove 16L mixture, replace with pure water → new ratio 5:7. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "2570"
    },
    2: {
        name: "Team 2",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: G→H, H→D, D NOT→E, D→A, B NOT→E. Find unique 4-terminal path starting at G. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 10hrs, B alone: 20hrs, C empties: 25hrs. All run together, but every 2hrs C is shut for 1hr (A&B keep running). How many complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 3km(N). Right 3km. Left 5km. Left 4km. Left 3km. Left 7km. Right 2km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 7:5. Remove 24L mixture, replace with pure water → new ratio 5:7. Find original milk quantity (liters). (If >9, last digit.)",
        key: "2979"
    },
    3: {
        name: "Team 3",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: D→F, F→G, G NOT→A, G→E, H NOT→B. Find unique 4-terminal path starting at D. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 12hrs, B alone: 18hrs, C empties: 36hrs. All run together, but every 3hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 2km(N). Right 2km. Right 7km. Left 1km. Left 4km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 3:2. Remove 20L mixture, replace with pure water → new ratio 1:2. Original milk quantity (liters)? (If >9, last digit.)",
        key: "8937"
    },
    4: {
        name: "Team 4",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: G→H, H→C, C NOT→B, C→D, A NOT→E. Find unique 4-terminal path starting at G. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 15hrs, B alone: 20hrs, C empties: 30hrs. All run together, but every 3hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 7km(N). Right 4km. Left 5km. Right 1km. Left 3km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 5:3. Remove 24L mixture, replace with pure water → new ratio 5:7. Original milk quantity (liters)? (If >9, last digit.)",
        key: "1265"
    },
    5: {
        name: "Team 5",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: B→E, E→F, F NOT→H, F→A, D NOT→H. Find unique 4-terminal path starting at B. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 9hrs, B alone: 18hrs, C empties: 27hrs. All run together, but every 3hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 2km(N). Left 4km. Left 6km. Right 8km. Left 8km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 3:1. Remove 8L mixture, replace with pure water → new ratio 3:5. Original milk quantity (liters)? (If >9, last digit.)",
        key: "2872"
    },
    6: {
        name: "Team 6",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: H→C, C→E, E NOT→D, E→A, G NOT→D. Find unique 4-terminal path starting at H. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 12hrs, B alone: 15hrs, C empties: 60hrs. All run together, but every 3hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 9km(N). Left 7km. Right 3km. Left 9km. Left 1km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 3:1. Remove 16L mixture, replace with pure water → new ratio 5:7. Original milk quantity (liters)? (If >9, last digit.)",
        key: "2897"
    },
    7: {
        name: "Team 7",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: F→B, B→D, D NOT→E, D→H, C NOT→G. Find unique 4-terminal path starting at F. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 10hrs, B alone: 15hrs, C empties: 20hrs. All run together, but every 3hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 1km(N). Left 5km. Right 8km. Left 1km. Left 3km. Right 6km. Left 2km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 9:7. Remove 16L mixture, replace with pure water → new ratio 1:1. Original milk quantity (liters)? (If >9, last digit.)",
        key: "6831"
    },
    8: {
        name: "Team 8",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: E→F, F→D, D NOT→B, D→C, H NOT→G. Find unique 4-terminal path starting at E. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 6hrs, B alone: 12hrs, C empties: 18hrs. All run together, but every 2hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 1km(N). Left 8km. Right 7km. Left 5km. Right 4km. Right 1km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 5:3. Remove 24L mixture, replace with pure water → new ratio 1:1. Original milk quantity (liters)? (If >9, last digit.)",
        key: "4575"
    },
    9: {
        name: "Team 9",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: D→A, A→E, E NOT→C, E→B, H NOT→C. Find unique 4-terminal path starting at D. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 16hrs, B alone: 24hrs, C empties: 48hrs. All run together, but every 4hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 9km(N). Right 8km. Left 3km. Right 3km. Left 8km. Right 3km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 3:2. Remove 10L mixture, replace with pure water → new ratio 3:4. Original milk quantity (liters)? (If >9, last digit.)",
        key: "7241"
    },
    10: {
        name: "Team 10",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: B→D, D→A, A NOT→G, A→H, E NOT→G. Find unique 4-terminal path starting at B. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 14hrs, B alone: 21hrs, C empties: 42hrs. All run together, but every 3hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 4km(N). Left 1km. Right 6km. Right 4km. Left 5km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 7:5. Remove 24L mixture, replace with pure water → new ratio 1:1. Original milk quantity (liters)? (If >9, last digit.)",
        key: "6058"
    },
    11: {
        name: "Team 11",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: C→G, G→D, D NOT→F, D→E, A NOT→B. Find unique 4-terminal path starting at C. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 8hrs, B alone: 24hrs, C empties: 16hrs. All run together, but every 2hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 1km(N). Left 2km. Left 9km. Right 4km. Right 5km. Right 8km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 5:1. Remove 24L mixture, replace with pure water → new ratio 5:7. Original milk quantity (liters)? (If >9, last digit.)",
        key: "8940"
    },
    12: {
        name: "Team 12",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: F→H, H→C, C NOT→A, C→E, A NOT→B. Find unique 4-terminal path starting at F. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 10hrs, B alone: 10hrs, C empties: 20hrs. All run together, but every 2hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 8km(N). Right 3km. Left 8km. Left 3km. Right 7km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 2:3. Remove 10L mixture, replace with pure water → new ratio 1:2. Original milk quantity (liters)? (If >9, last digit.)",
        key: "8634"
    },
    13: {
        name: "Team 13",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: E→H, H→F, F NOT→D, F→B, C NOT→G. Find unique 4-terminal path starting at E. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 9hrs, B alone: 12hrs, C empties: 18hrs. All run together, but every 3hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 1km(N). Right 7km. Right 7km. Left 4km. Right 6km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 3:2. Remove 10L mixture, replace with pure water → new ratio 2:3. Original milk quantity (liters)? (If >9, last digit.)",
        key: "7768"
    },
    14: {
        name: "Team 14",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: G→B, B→H, H NOT→D, H→A, F NOT→E. Find unique 4-terminal path starting at G. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 8hrs, B alone: 12hrs, C empties: 24hrs. All run together, but every 2hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 5km(N). Right 1km. Right 2km. Left 4km. Left 1km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 3:1. Remove 24L mixture, replace with pure water → new ratio 3:4. Original milk quantity (liters)? (If >9, last digit.)",
        key: "2662"
    },
    15: {
        name: "Team 15",
        logical: "Board terminals A-H: A=2 B=7 C=4 D=1 E=8 F=5 G=3 H=6. Clues: B→C, C→D, D NOT→H, D→A, H NOT→F. Find unique 4-terminal path starting at B. Answer = LAST terminal value.",
        visual: "Tank filled by A & B, drained by C. A alone: 12hrs, B alone: 20hrs, C empties: 30hrs. All run together, but every 3hrs C is shut for 1hr (A&B keep running). Complete hours to fill? (If >9, last digit.)",
        physical: "Priya starts facing North: Walks 2km(N). Left 3km. Left 8km. Right 1km. Right 5km. Right 2km. Shortest distance from start (km, rounded)? (If >9, last digit.)",
        vaultKey: "Vessel has milk:water = 3:1. Remove 12L mixture, replace with pure water → new ratio 3:5. Original milk quantity (liters)? (If >9, last digit.)",
        key: "2028"
    }
};

// Global State
let timerInterval = null;
let startTime = 0;
let currentEnteredPin = "";
let timerRunning = false;

// DOM Elements
const timerDisplay = document.getElementById('global-timer');
const finalTimerDisplay = document.getElementById('final-timer-display');
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

// Team Selection Elements
const teamSelectionOverlay = document.getElementById('team-selection-overlay');
const mainApp = document.getElementById('main-app');
const selectTeamBtns = document.querySelectorAll('.select-team-btn');

// Team Section Elements
const teamTitle = document.getElementById('team-title');
const puzzleLogical = document.getElementById('puzzle-logical');
const puzzleVisual = document.getElementById('puzzle-visual');
const puzzleVisualImage = document.getElementById('puzzle-visual-image');
const puzzlePhysical = document.getElementById('puzzle-physical');
const puzzleKey = document.getElementById('puzzle-key');

// Vault Elements — now 4 pin boxes
const pinBoxes = [
    document.getElementById('pin-1'),
    document.getElementById('pin-2'),
    document.getElementById('pin-3'),
    document.getElementById('pin-4')
];
const keyBtns = document.querySelectorAll('.key-btn[data-val]');
const btnClear = document.getElementById('btn-clear');
const btnEnter = document.getElementById('btn-enter');
const errorMessage = document.getElementById('error-message');
const vaultDoor = document.getElementById('vault-door');
const vaultStatusText = document.getElementById('vault-status-text');

// Success Overlay Elements
const successOverlay = document.getElementById('success-overlay');
const winningTeamText = document.getElementById('winning-team-text');
const btnReset = document.getElementById('btn-reset');

// --- Timer Logic ---
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
    const now = Date.now();
    const elapsed = now - startTime;
    timerDisplay.textContent = formatTime(elapsed);
}

function startTimer() {
    if (timerRunning) return;
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    return timerDisplay.textContent;
}

// --- Navigation Logic ---
function switchSection(targetId, teamId = null) {
    // Update active nav button
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Find matching button
    const activeBtn = Array.from(navButtons).find(btn => {
        if (teamId) return btn.getAttribute('data-team') == teamId;
        return btn.getAttribute('data-target') === targetId;
    });
    if (activeBtn) activeBtn.classList.add('active');

    // Update active section
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');

    // If it's a team section, populate content
    if (targetId === 'team-section' && teamId) {
        loadTeamContent(teamId);
    }
}

function loadTeamContent(teamId) {
    const team = teamsConfig[teamId];
    if (!team) return;

    teamTitle.textContent = `${team.name} Protocol`;
    puzzleLogical.textContent = team.logical;
    puzzleVisual.textContent = team.visual;
    puzzlePhysical.textContent = team.physical;
    puzzleKey.textContent = team.vaultKey;

    // Handle Visual Image
    if (team.visualImage) {
        puzzleVisualImage.src = team.visualImage;
        puzzleVisualImage.classList.remove('hidden');
    } else {
        puzzleVisualImage.classList.add('hidden');
        puzzleVisualImage.src = "";
    }
}

// Event Listeners for Navigation
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const team = btn.getAttribute('data-team');
        switchSection(target, team);
    });
});

// --- Vault Logic ---
function updatePinDisplay() {
    for (let i = 0; i < 4; i++) {
        pinBoxes[i].textContent = currentEnteredPin[i] || "";
        pinBoxes[i].classList.remove('active', 'error', 'success');

        // Highlight the current box to type in
        if (i === currentEnteredPin.length) {
            pinBoxes[i].classList.add('active');
        }
    }
    errorMessage.textContent = "";
}

function handleKeyPress(val) {
    if (currentEnteredPin.length < 4) {
        currentEnteredPin += val;
        updatePinDisplay();
    }
}

function handleClear() {
    currentEnteredPin = "";
    updatePinDisplay();
    pinBoxes.forEach(box => box.classList.remove('error'));
}

function triggerError() {
    pinBoxes.forEach(box => box.classList.add('error'));
    errorMessage.textContent = "ACCESS DENIED. INCORRECT KEY.";
    setTimeout(() => {
        handleClear();
    }, 1000);
}

function triggerSuccess(winningTeamName) {
    pinBoxes.forEach(box => box.classList.add('success'));
    errorMessage.style.color = "var(--success)";
    errorMessage.textContent = "ACCESS GRANTED.";

    // Handle vault animation
    vaultDoor.classList.add('unlocking');

    setTimeout(() => {
        vaultDoor.classList.remove('unlocking');
        vaultDoor.classList.add('open');
        vaultStatusText.textContent = "UNLOCKED";

        // Stop timer
        const finalTime = stopTimer();

        // Show overlay after a short delay for dramatic effect
        setTimeout(() => {
            winningTeamText.textContent = `${winningTeamName} successfully breached the vault!`;
            finalTimerDisplay.textContent = finalTime;
            successOverlay.classList.remove('hidden');
            // Slight delay to trigger opacity transition
            setTimeout(() => {
                successOverlay.classList.add('show');
            }, 50);
        }, 1500);

    }, 1000); // Wait for wheel spin animation
}

function handleEnter() {
    if (currentEnteredPin.length !== 4) {
        errorMessage.textContent = "PLEASE ENTER 4 DIGITS.";
        return;
    }

    // Check if the pin matches ANY team's key
    let matchedTeam = null;
    for (const [id, team] of Object.entries(teamsConfig)) {
        if (team.key === currentEnteredPin) {
            matchedTeam = team;
            break;
        }
    }

    if (matchedTeam) {
        triggerSuccess(matchedTeam.name);
    } else {
        triggerError();
    }
}

// Event Listeners for Keypad
keyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        handleKeyPress(btn.getAttribute('data-val'));
    });
});

btnClear.addEventListener('click', handleClear);
btnEnter.addEventListener('click', handleEnter);

// Handle Keyboard input
document.addEventListener('keydown', (e) => {
    // Only process if vault section is active
    if (!document.getElementById('vault-section').classList.contains('active')) return;

    // Don't process if overlay is shown
    if (!successOverlay.classList.contains('hidden')) return;

    if (e.key >= '0' && e.key <= '9') {
        handleKeyPress(e.key);
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
        currentEnteredPin = currentEnteredPin.slice(0, -1);
        updatePinDisplay();
    } else if (e.key === 'Enter') {
        handleEnter();
    }
});

// --- Reset Logic ---
btnReset.addEventListener('click', () => {
    // Hide overlay
    successOverlay.classList.remove('show');
    setTimeout(() => {
        successOverlay.classList.add('hidden');

        // Reset Vault Door
        vaultDoor.classList.remove('open');
        vaultStatusText.textContent = "SECURE";
        vaultStatusText.style.color = "var(--danger)";

        // Reset UI States
        handleClear();
        errorMessage.style.color = "var(--danger)";

        // Reset Timer
        stopTimer();
        timerDisplay.textContent = "00:00:00";

        // Go back to Team Selection
        teamSelectionOverlay.classList.remove('hidden');
        mainApp.classList.add('hidden');
        navButtons.forEach(btn => btn.classList.remove('active'));
    }, 1000);
});

// --- Team Selection Logic ---
selectTeamBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const teamId = btn.getAttribute('data-team');

        // Hide overlay, show main app
        teamSelectionOverlay.classList.add('hidden');
        mainApp.classList.remove('hidden');

        // Setup navigation to ONLY show the selected team and Vault
        navButtons.forEach(navBtn => {
            if (navBtn.classList.contains('vault-btn') || navBtn.getAttribute('data-team') == teamId) {
                navBtn.style.display = ''; // Restore default
            } else {
                navBtn.style.display = 'none'; // Hide
            }
        });

        // Initialize state for the selected team
        switchSection('team-section', teamId);
        updatePinDisplay();

        // Start timer when team is selected
        startTimer();
    });
});

// --- Initialization ---
function init() {
    // Show team selection overlay by default, hide main app
    teamSelectionOverlay.classList.remove('hidden');
    mainApp.classList.add('hidden');
}

// Run init when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
