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
