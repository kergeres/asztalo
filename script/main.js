"use strict";

// hamburger navigacio 
let cbOpen = true;
function hamburgerNav() {
 
    if(cbOpen==false)//ha zarva van
    {
        document.querySelector("#nav-container").classList.remove("nav-open");
        document.querySelector(".ham-menu-line").classList.remove("line-rot");
        document.querySelector(".ham-menu-linea").classList.remove("linea-rot");
        document.querySelector(".ham-menu-lineb").classList.remove("lineb-rot");
        
        cbOpen = true;
    }
    else
    {
        document.querySelector("#nav-container").classList.add("nav-open");
        document.querySelector(".ham-menu-line").classList.add("line-rot");
        document.querySelector(".ham-menu-linea").classList.add("linea-rot");
        document.querySelector(".ham-menu-lineb").classList.add("lineb-rot");
     
        cbOpen = false;
    }
    
    
  }
 
// fooldal hatter kepek animacioja
var slideIndex = 0;
  
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2500); 
} 
showSlides();


// adatbazis bekeres json filebol
let _images = [];

async function loadData() {
  let response = await fetch("json/images.json");
  let jsonData = await response.json();
  _images = jsonData;
  appendImage(_images)
}

loadData();

// diolay images vagyis az osszes kep vetitese
function appendImage(images) {
  let htmlTemplate = "";
 
  for (let image of images) 
  {
    htmlTemplate += `<a href="${image.image_link}" data-lightbox="mygallery" class=" gallery-img-effect">
    <img class="gallery-img" src="${image.image_link}"></a>`;
  }
  document.querySelector(".gallery-img-container").innerHTML = htmlTemplate;

}




// MAPBOX API
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VyZ2VyZXMiLCJhIjoiY2s3ZDE2OWptMGNlcDNucHE0dTJzaXRubyJ9.n8mW2tGizEW9Hwvu26iG9g';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/kergeres/ckixmhzgr3vfg19mqq4edgan9',
  zoom: 10.5,
  center: [19.177830, 47.619220],
});
var marker = new mapboxgl.Marker({
    color: "#B89047",
    scale: "1.5"
})
.setLngLat([19.177830, 47.619220])
.addTo(map)
map.addControl(new mapboxgl.NavigationControl())
map.scrollZoom.disable();

// MAPBOX API vége
