var cardContainer = document.getElementById("cardContainer");
var overlay = document.getElementById("overlay");
var largeImage = document.getElementById("largeImage");
var imageTitle = document.getElementById("imageTitle");
var imageDesc = document.getElementById("imageDesc");

function showCard(event) {
    var img = event.target; // ambil elemen gambar yang diklik
    overlay.style.display = "block";
    largeImage.src = img.src; // ambil src dari gambar yang diklik
    imageTitle.textContent = img.getAttribute("data-title"); // ambil title dari atribut
    imageDesc.textContent = img.getAttribute("data-desc"); // ambil deskripsi dari atribut
    cardContainer.style.display = "";
}

// Ambil semua elemen gambar dengan class thumbnail
var thumbnails = document.querySelectorAll(".thumbnail");

// Tambahkan event listener untuk setiap gambar
thumbnails.forEach(function(img) {
    img.onclick = showCard;
});

var closeButton = document.getElementById("close");
closeButton.onclick = function() {
    overlay.style.display = "none";
    cardContainer.style.display = "none";
};

overlay.onclick = function() {
    overlay.style.display = "none";
    cardContainer.style.display = "none";
};
