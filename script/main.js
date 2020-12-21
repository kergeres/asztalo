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
    else if(cbOpen==true)
    {
      
        document.querySelector("#nav-container").classList.add("nav-open");
        document.querySelector(".ham-menu-line").classList.add("line-rot");
        document.querySelector(".ham-menu-linea").classList.add("linea-rot");
        document.querySelector(".ham-menu-lineb").classList.add("lineb-rot");


        document.querySelector(".menu-point-cont").addEventListener('click', function() {
          document.querySelector("#nav-container").classList.remove("nav-open");
          document.querySelector(".ham-menu-line").classList.remove("line-rot");
          document.querySelector(".ham-menu-linea").classList.remove("linea-rot");
          document.querySelector(".ham-menu-lineb").classList.remove("lineb-rot");
          cbOpen = true;
        });
        cbOpen = false;
    }  
  }
 
// fooldal hatter kepek animacioja
let slideIndex = 0;
  
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";  
    slides[i].style.opacity = "0";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].style.opacity = "1";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
} 
showSlides();


// adatbazis bekeres json filebol
let _images = [];

async function loadData() {
  let response = await fetch("json/images.json");
  let jsonData = await response.json();
  _images = jsonData;
  console.log(_images);
  appendImage(_images);
  
}
loadData();




// diolay images vagyis az osszes kep vetitese
function appendImage(images) {
  let htmlTemplate = "";
  let showMoreButton = "<button onclick='appendImagesMore(_images)' class='loadmore_btn'>Több Kép</button>"
 
  for (let image of images) 
  {
    
    if (image.id =="9")
    {
      document.querySelector(".gallery-img-container").innerHTML =  htmlTemplate + showMoreButton ;
      
    }
    else{
      htmlTemplate += `<a href="${image.image_link}" data-lightbox="mygallery" class=" gallery-img-effect">
      <img class="gallery-img" src="${image.image_link}"></a>`;
    }
    
  }
 
}

// az osszes kép metoltése a tobb kep gomb megnyomassal 
function appendImagesMore(images)
{
  console.log("mukodi");
  let htmlTemplate = "";
  let showMoreButton = "<button onclick='appendImage(_images)' class='loadmore_btn'>Kevesebb Kép</button>"
 
  for (let image of images) 
  {
   htmlTemplate += `<a href="${image.image_link}" data-lightbox="mygallery" class=" gallery-img-effect">
   <img class="gallery-img" src="${image.image_link}"></a>`;
   document.querySelector(".gallery-img-container").innerHTML =  htmlTemplate + showMoreButton;
  }
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


