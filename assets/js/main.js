
//*************** Кнопка скролл вверх экрана
let topButton = document.getElementById("topBtn");

function scrollFunction() {
    console.log(document.body.scrollTop )
    console.log(document.documentElement.scrollTop)

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        topButton.style.display = "block";
    else
        topButton.style.display = "none";
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    scrollFunction()
}

scrollFunction();

//****************** Карта

var map = L.map('map').setView([-4.1995, 15.2135], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


