// --- SCRIPT FOR OWNER PFP MODAL (LIGHTBOX) ---

// Get the modal elements
var modal = document.getElementById("imageModal");
var pfpImage = document.getElementById("ownerPfp");
var modalImg = document.getElementById("modalImage");
var closeBtn = document.getElementById("closeModal");

// When the user clicks on the profile picture, open the modal 
pfpImage.onclick = function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() { 
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the image, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// --- SCRIPT FOR SNOW EFFECT ---
document.addEventListener('DOMContentLoaded', function() {
    const snowContainer = document.getElementById('snow-container');
    const numberOfSnowflakes = 150; // You can change this number

    for (let i = 0; i < numberOfSnowflakes; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const size = Math.random() * 4 + 1; // Size: 1px to 5px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.opacity = Math.random() * 0.7 + 0.3; // Opacity: 0.3 to 1.0

        // Duration: 10 to 20 seconds
        const duration = Math.random() * 10 + 10; 
        snowflake.style.animationDuration = `${duration}s`;

        // Delay: 0 to 10 seconds
        const delay = Math.random() * -10; // Negative delay starts animation partway through
        snowflake.style.animationDelay = `${delay}s`;

        snowContainer.appendChild(snowflake);
    }
});
