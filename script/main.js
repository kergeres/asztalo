let cbOpen = true;
function myFunction() {
    // Get the checkbox
   
   
    if(cbOpen==false)//ha zarva van
    {
        // document.querySelector(".ham-menu-line").style.display = "block";
        // document.querySelector("#nav-container").style.display = "none";
        document.querySelector("#nav-container").classList.remove("nav-open");
        document.querySelector(".ham-menu-line").classList.remove("line-rot");
        document.querySelector(".ham-menu-linea").classList.remove("linea-rot");
        document.querySelector(".ham-menu-lineb").classList.remove("lineb-rot");
        
        cbOpen = true;
    }
    else
    {
        
        // document.querySelector(".ham-menu-line").style.display = "none";
        document.querySelector("#nav-container").classList.add("nav-open");
        document.querySelector(".ham-menu-line").classList.add("line-rot");
        document.querySelector(".ham-menu-linea").classList.add("linea-rot");
        document.querySelector(".ham-menu-lineb").classList.add("lineb-rot");
        // document.querySelector("#nav-container").style.display = "block";
        cbOpen = false;
    }
    
    // if (checkBox.checked == true){
        
    //     document.querySelector(".ham-menu-line").style.display = "block";
    //     document.querySelector("#nav-container").style.display = "block";
    
    // } else {
    //     document.querySelector(".ham-menu-line").style.display = "none";
    //     document.querySelector("#nav-container").style.display = "none";
        
    // }
  }
 
 

  var slideIndex = 0;
showSlides();

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
  setTimeout(showSlides, 3000); // Change image every 2 seconds
} 


