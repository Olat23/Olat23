document.addEventListener("DOMContentLoaded", () => {
    const balloonsContainer = document.querySelector(".balloons");
    
    // Generate 20 balloons
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        
        // Random horizontal positioning
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDelay = Math.random() * 5 + "s"; // Stagger animations
        balloon.style.animationDuration = 10 + Math.random() * 5 + "s"; // Varied duration
        
        balloonsContainer.appendChild(balloon);
    }
});
