// Players Online Counter
const online = document.getElementById("online");

setInterval(() => {
    let number = Math.floor(Math.random() * 250) + 1200;
    online.textContent = number.toLocaleString();
}, 2500);

// Continue Button Animation
const btn = document.getElementById("offerButton");

btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
});

btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
});

// Glow Effect
setInterval(() => {
    btn.style.boxShadow = "0 0 35px rgba(0,255,170,.8)";
    setTimeout(() => {
        btn.style.boxShadow = "0 15px 35px rgba(0,255,170,.4)";
    }, 500);
}, 1200);
