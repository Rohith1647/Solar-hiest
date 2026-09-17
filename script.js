// Configuration for the Teams and their specific puzzles/keys
// Each team has 4 challenges: logical (Digit 1), visual+image (Digit 2), physical (Digit 3), vaultKey (Digit 4)
// All vault codes are 4 digits.
const teamsConfig = {
    1: {
        name: "Team 1",
        logical: "Solve for x: 4(x − 2) − 3(x − 1) = 2",
        visual: "A number decreases by 10% to give 90. Find 1% of the original number.",
        physical: "Starting at her house facing North, Priya walks a sequence of legs: Walks 9 km (N). Turns left, 2 km. Turns left, 4 km. Turns right, 9 km. Turns left, 5 km. Turns left, 4 km. Shortest distance (km, rounded) from start? (If >9, give last digit.)",
        vaultKey: "A vessel contains milk and water in ratio 5:3. If 16 liters of the mixture is removed and replaced with pure water, the new ratio becomes 5:7. Find the original quantity of milk (liters). (If >9, give last digit.)",
        key: "7170"
    },
    2: {
        name: "Team 2",
        logical: "Solve for x: (x + 2)/2 + (x + 2)/4 = 6",
        visual: "A sum of ₹200 grows to ₹236 in a year at simple interest. Find 10% of the interest earned (rounded).",
        physical: "Priya: Walks 3 km (N). Turns right, 3 km. Left, 5 km. Left, 4 km. Left, 3 km. Left, 7 km. Right, 2 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 7:5. Remove 24 liters, replace with pure water → new ratio 5:7. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "6479"
    },
    3: {
        name: "Team 3",
        logical: "Solve for x: 2(3x − 1) − 3(x − 2) = 10",
        visual: "A number is 20% more than 15. Find 20% of the larger number (rounded).",
        physical: "Priya: Walks 2 km (N). Turns right, 2 km. Right, 7 km. Left, 1 km. Left, 4 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 3:2. Remove 20 liters, replace with pure water → new ratio 1:2. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "2437"
    },
    4: {
        name: "Team 4",
        logical: "Solve for x: (2x + 1)/3 + (x − 2)/2 = 4",
        visual: "60% of a class of 45 students passed. Find the number of failed students divided by 3.",
        physical: "Priya: Walks 7 km (N). Turns right, 4 km. Left, 5 km. Right, 1 km. Left, 3 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 5:3. Remove 24 liters, replace with pure water → new ratio 5:7. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "4665"
    },
    5: {
        name: "Team 5",
        logical: "Solve for x: 3(2x − 1) = 2(2x + 4) − 5",
        visual: "25% of a number equals 20. Find 10% of that number.",
        physical: "Priya: Walks 2 km (N). Turns left, 4 km. Left, 6 km. Right, 8 km. Left, 8 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 3:1. Remove 8 liters, replace with pure water → new ratio 3:5. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "3872"
    },
    6: {
        name: "Team 6",
        logical: "Solve for x: 11 − 2(x − 1) = 3x − 2",
        visual: "80% of a number is 64. Find 5% of that number.",
        physical: "Priya: Walks 9 km (N). Turns left, 7 km. Right, 3 km. Left, 9 km. Left, 1 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 3:1. Remove 16 liters, replace with pure water → new ratio 5:7. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "3497"
    },
    7: {
        name: "Team 7",
        logical: "Solve for x: x/2 + x/3 = 5",
        visual: "A number increased by 25% gives 40. Find 10% of the original number (rounded).",
        physical: "Priya: Walks 1 km (N). Turns left, 5 km. Right, 8 km. Left, 1 km. Left, 3 km. Right, 6 km. Left, 2 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 9:7. Remove 16 liters, replace with pure water → new ratio 1:1. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "6331"
    },
    8: {
        name: "Team 8",
        logical: "Solve for x: 5(x − 2) + 3 = 3x + 1",
        visual: "A number decreased by 20% becomes 32. Find 10% of the original number.",
        physical: "Priya: Walks 1 km (N). Turns left, 8 km. Right, 7 km. Left, 5 km. Right, 4 km. Right, 1 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 5:3. Remove 24 liters, replace with pure water → new ratio 1:1. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "4475"
    },
    9: {
        name: "Team 9",
        logical: "Solve for x: (x + 3)/2 − (x − 1)/3 = 3",
        visual: "A student scores 72% in an exam out of 50 marks. Find 10% of the marks obtained (rounded).",
        physical: "Priya: Walks 9 km (N). Turns right, 8 km. Left, 3 km. Right, 3 km. Left, 8 km. Right, 3 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 3:2. Remove 10 liters, replace with pure water → new ratio 3:4. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "7441"
    },
    10: {
        name: "Team 10",
        logical: "Solve for x: 2x − 3(x − 2) = −1",
        visual: "A number is increased by 10% twice, becoming 96.8. Find 5% of the original number (rounded).",
        physical: "Priya: Walks 4 km (N). Turns left, 1 km. Right, 6 km. Right, 4 km. Left, 5 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 7:5. Remove 24 liters, replace with pure water → new ratio 1:1. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "7458"
    },
    11: {
        name: "Team 11",
        logical: "Solve for x: 6(x − 1) − 4(x − 2) = x + 3",
        visual: "Cost price of an item is ₹20. It is marked up 50% and then sold at a 40% discount. Find 10% of the final selling price (rounded).",
        physical: "Priya: Walks 1 km (N). Turns left, 2 km. Left, 9 km. Right, 4 km. Right, 5 km. Right, 8 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 5:1. Remove 24 liters, replace with pure water → new ratio 5:7. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "1240"
    },
    12: {
        name: "Team 12",
        logical: "Solve for x: 3(x + 2) = 2(x + 4) + 1",
        visual: "45% of x is 27. Find 10% of x, then subtract 1.",
        physical: "Priya: Walks 8 km (N). Turns right, 3 km. Left, 8 km. Left, 3 km. Right, 7 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 2:3. Remove 10 liters, replace with pure water → new ratio 1:2. Find original milk quantity (liters). (If >9, last digit.)",
        key: "3534"
    },
    13: {
        name: "Team 13",
        logical: "Solve for x: 3x − 2(x − 3) = 3x − 2",
        visual: "75% of a number equals 9. Find 10% of that number (rounded).",
        physical: "Priya: Walks 1 km (N). Turns right, 7 km. Right, 7 km. Left, 4 km. Right, 6 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 3:2. Remove 10 liters, replace with pure water → new ratio 2:3. Find original milk quantity (liters). (If >9, last digit.)",
        key: "4168"
    },
    14: {
        name: "Team 14",
        logical: "Solve for x: 3(2x + 1) − 2(3x − 1) = x − 1",
        visual: "A price rises 10%, then falls 10%. The final price is 99. Find 1% of the original price.",
        physical: "Priya: Walks 5 km (N). Turns right, 1 km. Right, 2 km. Left, 4 km. Left, 1 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 3:1. Remove 24 liters, replace with pure water → new ratio 3:4. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "6162"
    },
    15: {
        name: "Team 15",
        logical: "Solve for x: (3x − 2)/4 = (x + 2)/2 − 1",
        visual: "30% of a number is 24. Find 10% of that number.",
        physical: "Priya: Walks 2 km (N). Turns left, 3 km. Left, 8 km. Right, 1 km. Right, 5 km. Right, 2 km. Shortest distance from start? (If >9, last digit.)",
        vaultKey: "Milk:water ratio = 3:1. Remove 12 liters, replace with pure water → new ratio 3:5. Find original milk quantity (liters). (If >9, give last digit.)",
        key: "2828"
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
