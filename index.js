const bars = document.getElementById("bars")
const resDiv = document.getElementById("responisveNav")
const xmark = document.getElementById('xmark')

xmark.addEventListener('click', closeDiv)
bars.addEventListener("click", openDiv)
resDiv.addEventListener("click", function () {
    resDiv.style.width = "0"
})

function openDiv() {
    resDiv.style.width = "80%"
}

function closeDiv() {
    resDiv.style.width = "0%"
}


var slideImg = document.getElementById("slideImg");

var images = new Array(
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
);
let length = images.length;
let i = 0;

function slider() {
    if (i > length - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 2000)
}

window.onload = slider()