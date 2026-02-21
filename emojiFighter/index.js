let fighters = [
    "🐉",
    "🐥",
    "🐊",
    "💩",
    "🦍",
    "🐢",
    "🐩",
    "🦭",
    "🦀",
    "🐝",
    "🤖",
    "🐘",
    "🐸",
    "🕷",
    "🐆",
    "🦕",
    "🦁",
];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randNUm1 = Math.floor(Math.random() * fighters.length);
    let randNUm2 = Math.floor(Math.random() * fighters.length);
    stageEl.textContent = (fighters[randNUm1] + " vs " + fighters[randNUm2]);
});