const slideshowContainer = document.getElementById('slideshow-container');
const images = slideshowContainer.getElementsByTagName('img');
let currentIndex = 0;

// Function to show the next image
function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

// Initial display
images[currentIndex].style.display = 'block';

// Set interval to change images every 2 seconds
setInterval(showNextImage, 2000);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "35px Comic Sans MS";
ctx.fillStyle = "rgba(255,99,71,0.5)";
ctx.fillText("OrderMyBooks", 10, 30);