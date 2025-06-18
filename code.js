const h4 = document.querySelector("h4")
const list = document.querySelector("#list")
const POIbutton1 = document.querySelector(".poi1")
const POIbutton2 = document.querySelector(".poi2")
const POIbutton3 = document.querySelector(".poi3")
const POIbutton4 = document.querySelector(".poi4")
const POIbutton5 = document.querySelector(".poi5")

const video = document.querySelector("#poi_video")
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

const TemplateButton = `
        <div id="list">
            <button class="poi1">1: Histoire du fort</button> <br>
            <button class="poi2">2: Un emplacement stratégique</button> <br>
            <button class="poi3">3: Les murailles et glacis</button> <br>
            <button class="poi4">4: Un point de fuite</button> <br>
            <button class="poi5">5:La vue sur la mer</button> <br>
        </div>`

const TemplateVideo1 = `<div id="poi_video">
        
        <button id="TheButton">Retour</button>

        <h4>Histoire du fort</h4>

        <video id="my-video" class="video-js"
        controls preload="auto"
        width="380" height="676" poster="miniature.jpg" data-setup="{}">
        <source src="timeline.mp4" type="video/mp4" />
        
        <p class="vjs-no-js">
        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
        
        </div>
`

//option temporaire, créant une pop-up affichant les coordonées cliqués

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }
// map.on('click', onMapClick);

//Je setup des boutons pour activer mes vidéos, même sans etre sur place, ou en cas ou la localisation ne fonctionne pas

POIbutton1.addEventListener("click", POI1Click)

function POI1Click()  {
    list.insertAdjacentHTML("afterend", TemplateVideo1)
    list.remove()
    
}
POIbutton2.addEventListener("click", POI2Click)

function POI2Click()  {
    list.insertAdjacentHTML("afterend", TemplateVideo1)
    list.remove()
}
POIbutton3.addEventListener("click", POI3Click)

function POI3Click()  {
    list.insertAdjacentHTML("afterend", TemplateVideo1)
    list.remove() 
}
POIbutton4.addEventListener("click", POI4Click)

function POI4Click()  {
    list.insertAdjacentHTML("afterend", TemplateVideo1)
    list.remove() 
}
POIbutton5.addEventListener("click", POI5Click)

function POI5Click()  {
    list.insertAdjacentHTML("afterend", TemplateVideo1)
    list.remove() 
}

document.querySelector("#TheButton").addEventListener("click", Please)

function Please() {
    console.log("test")
    video.insertAdjacentHTML("beforebegin", TemplateButton)
    video.remove
    
}

//ajout d'une fonction de detection des appareils mobile (test)

function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

function device(){
if (isMobile() === 'mobile') {
  console.log("Bonjour Mr Errante :3")
} 
else {
    alert("L'interface a été créé avec les utilisateurs mobile en tête, ce n'est pas plaisant sur ordinateur ou tablette. Merci de votre compréhension.");
}
};

//permet a la vidéo de se lancer automatiquement
document.querySelector("#video").autoplay = true;
