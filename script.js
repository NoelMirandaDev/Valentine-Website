console.log("Script loaded");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const buttonArea = document.getElementById("buttonArea");
const heartsLayer = document.getElementById("hearts");

function moveNoButton() {
    const areaRect = buttonArea.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const padding = 10;
    const maxX = areaRect.width - btnRect.width - padding;
    const maxY = areaRect.height - btnRect.height - padding;

    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);

    noBtn.style.left = `${x + btnRect.width / 2}px`;
    noBtn.style.top = `${y + btnRect.height / 2}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
}, { passive: false });

yesBtn.addEventListener("click", () => {
    const GIF_URL = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2ZqOHJwYWpuN3M1bXNucnVoanBpZ2plc2l0bWRuNHNvN2hnZ3IzYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgKWQeoclWggTDO/giphy.gif";

    document.querySelector(".card").innerHTML = `
    <div class="result">
        <h1>Ohh yeah!!! Jennifer Salgado is my valentine! 💖</h1>
        <p class="small">
        Be ready for our date next week! 🌸
        </p>
        <img 
        src="${GIF_URL}" 
        alt="Cute celebration gif" 
        />
        <p class="small">I love you forever my queen 💕</p>
    </div>
    `;

    burstHearts(40);
});

function spawnHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    const flowers = ["💖", "💕", "🌸"];
    heart.textContent = flowers[Math.floor(Math.random() * flowers.length)];

    const size = 14 + Math.random() * 22;
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;

    const duration = 4 + Math.random() * 4;
    heart.style.animationDuration = `${duration}s`;

    heartsLayer.appendChild(heart);

    window.setTimeout(() => {
        heart.remove();
    }, (duration + 0.2) * 1000);
}

function burstHearts(count) {
    for (let i = 0; i < count; i++) {
        window.setTimeout(spawnHeart, i * 30);
    }
}

window.setInterval(spawnHeart, 250);
moveNoButton();