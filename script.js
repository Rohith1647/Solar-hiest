// Configuration for the Teams and their specific puzzles/keys
// Each team has 4 challenges: logical (Digit 1), visual+image (Digit 2), physical (Digit 3), vaultKey (Digit 4)
// All vault codes are 4 digits.
const teamsConfig = {
    1: {
        name: "Team 1",
        logical: "The Book: A book costs $20 plus half its own price. How much does the book cost? Solve the derived answer in this equation to get Digit 1: (3x^2−4x)/5x − (x/8) = 4.",
        visual: "Which Way Leads To the Center? Study the maze image carefully — the number of dead ends gives you Digit 2.",
        visualImage: "1phy.jpeg",
        physical: "Do 5 jumping jacks in slow motion while counting aloud. The number of people who laugh gives you Digit 3.",
        vaultKey: "Think of the first prime number greater than 6. That is your Digit 4.",
        key: "4427"
    },
    2: {
        name: "Team 2",
        logical: "A lily pad doubles in size every day. If it takes 48 days to cover the entire lake, how many days does it take to cover half the lake? Use the last digit of your answer as Digit 1.",
        visual: "Find the answer hidden in the image and use only the last digit from the result as Digit 2.",
        visualImage: "2phy.jpeg",
        physical: "Say a complete movie dialogue to your team. Count the number of syllables in the last word — that gives Digit 3.",
        vaultKey: "How many sides does a hexagon have? Subtract 2 from it. That is your Digit 4.",
        key: "7534"
    },
    3: {
        name: "Team 3",
        logical: "A snail is at the bottom of a 20-foot well. Each day it climbs 3 feet, but each night it slips back 2 feet. How many days to reach the top? Use only the tens digit of your answer as Digit 1.",
        visual: "Find the Odd One Out in the image. Count how many items are in the matching group to get Digit 2.",
        visualImage: "3phy.jpeg",
        physical: "Slow Motion Walk Race across the room. The place number of the winner (1st=1, 2nd=2...) gives Digit 3.",
        vaultKey: "How many letters are in the word VAULT? That is your Digit 4.",
        key: "1915"
    },
    4: {
        name: "Team 4",
        logical: "A boy has as many sisters as brothers. Each sister has only half as many sisters as brothers. How many brothers are there? Solve: x^2−3x+(20/x) to verify. The result's first digit is Digit 1.",
        visual: "Count the number of triangles in the image and use only the first digit of that count as Digit 2.",
        visualImage: "4phy.jpeg",
        physical: "Stare at your teammates without blinking for 1 minute. The number of people who last 30+ seconds gives Digit 3.",
        vaultKey: "What is 3 squared minus 5? That is your Digit 4.",
        key: "9644"
    },
    5: {
        name: "Team 5",
        logical: "A single bacterium in a jar doubles every minute. The jar is full in 60 minutes. At what minute was the jar 1/4 full? Use derived answer as x in: x/29−(x−58/x)=2. The answer's first digit is Digit 1.",
        visual: "Which Bottle Fills First? The bottle number (1, 2, 3...) that fills first is Digit 2.",
        visualImage: "5phy.jpeg",
        physical: "Hold the Invisible Chair pose + raise one arm. Seconds held by longest-lasting person (mod 9 + 1) gives Digit 3.",
        vaultKey: "How many fingers are on two hands? Divide by 5. That is your Digit 4.",
        key: "2382"
    },
    6: {
        name: "Team 6",
        logical: "If 1.5 hens lay 1.5 eggs in 1.5 days, how many eggs does 1 hen lay in 1 day? Take the denominator of your fractional answer as Digit 1.",
        visual: "Which Key Fits In the lock shown? The key number (1, 2, 3...) that matches is Digit 2.",
        visualImage: "6phy.jpeg",
        physical: "Dance a hook step together as a team. Count how many teammates get it right on the first try — that is Digit 3.",
        vaultKey: "What is the result of 2^3 − 2? That is your Digit 4.",
        key: "3756"
    },
    7: {
        name: "Team 7",
        logical: "If you have a 3-litre jug and a 5-litre jug, how do you measure exactly 4 litres? Count the total number of pouring steps needed — that is Digit 1.",
        visual: "How many squares (of all sizes) are in a 3x3 grid? Use the units digit as Digit 2.",
        visualImage: "1phy.jpeg",
        physical: "Whisper a 10-word sentence down a chain of teammates. Count correctly recalled words ÷ 2 (round up) = Digit 3.",
        vaultKey: "What digit is at the centre of a standard phone keypad? That is your Digit 4.",
        key: "6455"
    },
    8: {
        name: "Team 8",
        logical: "A clock shows 3:15. What is the angle between the hour and minute hands? Divide that angle by 90 and take the remainder — that is Digit 1.",
        visual: "Spot the difference: count the number of differences in the image. Use the ones digit as Digit 2.",
        visualImage: "2phy.jpeg",
        physical: "Everyone on the team must clap in perfect unison 5 times. Attempts needed to succeed (max 9) = Digit 3.",
        vaultKey: "How many vowels are in the word ENIGMA? That is your Digit 4.",
        key: "7837"
    },
    9: {
        name: "Team 9",
        logical: "In a room of 23 people, what is the probability (%) that two share a birthday? Use only the tens digit of that percentage as Digit 1.",
        visual: "Count the number of circles hidden in the image. Use only the ones digit as Digit 2.",
        visualImage: "3phy.jpeg",
        physical: "Stack 5 paper cups into a pyramid without using your dominant hand. Time in seconds ÷ 10 (round down) + 1 = Digit 3.",
        vaultKey: "What is 4! ÷ 8? That is your Digit 4.",
        key: "5163"
    },
    10: {
        name: "Team 10",
        logical: "You have 9 coins, one is lighter (fake). How many weighings on a balance scale are needed in the worst case to find it? That number is Digit 1.",
        visual: "How many triangles point upward in the image? Use that count as Digit 2.",
        visualImage: "4phy.jpeg",
        physical: "Form a human knot with teammates, then untangle without releasing hands. Time in minutes (ceiling) = Digit 3.",
        vaultKey: "What is the 4th letter of the alphabet? Convert it to its position number. That is Digit 4.",
        key: "2414"
    },
    11: {
        name: "Team 11",
        logical: "A merchant starts with $100. He gains 10% on Monday, loses 10% on Tuesday. How much does he have? The answer's tens digit is Digit 1.",
        visual: "What number does the shadow form in the image? Use its ones digit as Digit 2.",
        visualImage: "5phy.jpeg",
        physical: "Complete a group paper-toss challenge: each person tosses into a bin from 2 metres. Successful shots = Digit 3 (max 9).",
        vaultKey: "How many days are in a leap year? Sum the individual digits. That is Digit 4.",
        key: "9378"
    },
    12: {
        name: "Team 12",
        logical: "If MARCH = 43 and APRIL = 57, what does MAY equal using the same code? Use the ones digit of the answer as Digit 1.",
        visual: "Decode the pattern in the image: what is the missing number? Use its ones digit as Digit 2.",
        visualImage: "6phy.jpeg",
        physical: "Build the tallest freestanding tower using 10 index cards — no tape or glue. Height in cm ÷ 5 (round down) + 1 = Digit 3.",
        vaultKey: "What is the Roman numeral IX in Arabic? Subtract 5 from it. That is Digit 4.",
        key: "3624"
    },
    13: {
        name: "Team 13",
        logical: "Train A leaves at 60 km/h, Train B at 90 km/h toward each other from 300 km apart. When do they meet? The answer in minutes — use the tens digit as Digit 1.",
        visual: "Count the total number of line segments in the image. Use the ones digit as Digit 2.",
        visualImage: "1phy.jpeg",
        physical: "Mirror your partner's movements for 30 seconds without error. Successful mirror pairs × 1 = Digit 3 (max 9).",
        vaultKey: "What is the square root of 49? Subtract 4. That is Digit 4.",
        key: "1583"
    },
    14: {
        name: "Team 14",
        logical: "If you fold a paper in half 7 times, how many layers do you get? Take the number of digits in that answer as Digit 1.",
        visual: "How many arrows point RIGHT in the image? That count is Digit 2.",
        visualImage: "2phy.jpeg",
        physical: "Each person must balance a book on their head for 20 seconds. People who succeed = Digit 3 (max 9).",
        vaultKey: "What is 6 × 6 ÷ 9? That is your Digit 4.",
        key: "2441"
    },
    15: {
        name: "Team 15",
        logical: "A frog jumps 1/3 of the remaining distance to a wall each jump. After 3 jumps, what fraction of the original distance remains? Multiply numerator × denominator and use the ones digit as Digit 1.",
        visual: "Find the hidden word in the image. Count its letters and use the ones digit as Digit 2.",
        visualImage: "3phy.jpeg",
        physical: "Everyone freeze in place for 45 seconds — no laughing allowed. People who stay frozen ÷ 2 (round up) = Digit 3.",
        vaultKey: "How many months have exactly 30 days? That is your Digit 4.",
        key: "7354"
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
