var myMap = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(myMap);


function ubicar() {
   
    var latitud = parseFloat(document.getElementById('lat').value);
    var longitud = parseFloat(document.getElementById('lng').value);

    var marker = L.marker([latitud, longitud]).addTo(myMap);
    
    
    myMap.setView([latitud, longitud], 15);
}

document.getElementById('locate-button').addEventListener('click', ubicar);

