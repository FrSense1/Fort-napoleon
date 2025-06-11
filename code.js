const POI = document.querySelector("#POI")
const h4 = document.querySelector("h4")
const list = document.querySelector("#list")
const POIbutton = document.querySelectorAll("button")
var popup = L.popup()

//je crée la map et défini son zoom et son point de départ
var map = L.map('map', {
        center: [43.09416667, 5.89333333], 
        zoom: 18,
        minZoom: 16
        })


// j'ajoute l'apparence de la map, son zoom max et le copyright 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var specialIcon = L.icon({
    iconUrl: 'UwU.png',

})

// j'ajoute les points d'intérets (POI)
var POI1 = L.marker([43.094054, 5.894036], {icon: specialIcon}).addTo(map).bindPopup("Point 1");
var POI2 = L.marker([43.094572, 5.893905], {icon: specialIcon}).addTo(map).bindPopup("Point 2");
var POI3 = L.marker([43.094821, 5.892956], {icon: specialIcon}).addTo(map).bindPopup("Point 3");
var POI4 = L.marker([43.093931, 5.892527], {icon: specialIcon}).addTo(map).bindPopup("Point 4");
var POI5 = L.marker([43.093890, 5.893151], {icon: specialIcon}).addTo(map).bindPopup("Point 5");

//active la géolocalisation
map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are here").openPopup();

    L.circle(e.latlng, radius/2).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);


// je prépare la template comprenant la liste des poiints d'intéret
const template = `
    <br>
` 

//je créer un "stalker", qui déploiera la liste des point d'intéret au chargement
addEventListener("load", () => {
        list.insertAdjacentHTML("afterend", template)
})





//option temporaire, créant une pop-up affichant les coordonées cliqués
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

//option temporaire, permettant de tester mes boutons
// POIbutton[0].addEventListener("click", POI1Click)

// function POI1Click()  {
//     console.log("UwU") 
// }