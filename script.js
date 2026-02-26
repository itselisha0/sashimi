const correctPassword = "67";
const herNameText = "Sasha 💗";
const subtitleText = "A Little Something for You...";
const message = `Happy 19th birthday! Can you believe it? Nineteen years of being the incredible, kind, and unforgettable person you are, and somehow, I get to share part of that story with you. It feels like yesterday when we started dating, yet every moment since then has been nothing short of magical. In these few months, you’ve become my favorite person, my safe place, and the light in my days.

I'm currently writing this letter while we are in a disagreement and you aren't talking to me, but I'm not letting anything get in the way of how much I want to show you that I love you. 

I still remember the first time we talked, how easy it felt to be with you, how every little thing you did made me smile without even realizing it. Being with you has shown me what it means to truly connect with someone, to feel seen, understood, and loved. Every laugh we share, every quiet moment together, every glance that says more than words ever could, it all feels like a dream I never want to wake from.

You have this way of making ordinary moments extraordinary. The way you care, the way you listen, the way your presence alone can calm my mind. Even in moments of uncertainty or when life feels overwhelming (which is like a lot right now...), knowing you’re there makes everything feel lighter. You’ve shown me that love can be gentle, strong, and patient all at once.

On this special day, I want you to know just how extraordinary you are. You inspire me, challenge me, and make me want to be a better person every single day. I am endlessly grateful for your trust, your love, and your unwavering presence in my life. You are my heart, my joy, and my home.

Thank you for being you. Thank you for letting me share in your world, for believing in us, and for filling my life with love and meaning. I look forward to countless more birthdays with you, more adventures, more quiet moments, and more memories that are ours alone.`;

// Allow "Enter" key to unlock
document.getElementById("passwordInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkPassword();
});

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    if (input === correctPassword) {
        document.getElementById("lock-screen").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
        
        const music = document.getElementById("bgMusic");
        music.play().catch(() => console.log("Music blocked"));
        
        typeEffect("herName", herNameText, 150, () => {
            typeEffect("subtitle", subtitleText, 100);
        });
    } else {
        document.getElementById("error").innerText = "Wrong password 💔";
        document.getElementById("passwordInput").value = "";
    }
}

function typeEffect(id, text, speed, callback) {
    const el = document.getElementById(id);
    let i = 0;
    const timer = setInterval(() => {
        el.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(timer);
            if (callback) callback();
        }
    }, speed);
}

let letterTyped = false;
function toggleLetter(element) {
    element.classList.toggle("open");
    if (!letterTyped && element.classList.contains("open")) {
        letterTyped = true;
        typeEffect("typedText", message, 40);
    }
}

// ✨ Smooth Sparkle Trail
document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.innerHTML = ["✨", "🌸", "🤍"][Math.floor(Math.random() * 3)];
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
});