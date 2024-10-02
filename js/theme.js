
// slider js 
$(document).ready(function(){
  $('.Portfolio-slider-box').slick({
    autoplay:true
  });
});

// nav js 


// function openNav() {
//   document.getElementById("manu").style.height = "fit-content";
//   document.getElementById("close-manu").style.display = "block";
//   document.getElementById("nav-list").style.display = "block";
// }

// function closeNav() {
//   document.getElementById("manu").style.height = "0";
//   document.getElementById("close-manu").style.display = "none";
//   document.getElementById("nav-list").style.display = "none";
// }



function openNav() {

  if (window.innerWidth < 1025) {
    // Code to execute when body width is less than 1200px
    document.getElementById("manu").style.height = "fit-content";
    document.getElementById("close-manu").style.display = "block";
    document.getElementById("nav-list").style.display = "block";
}
  
}

function closeNav() {

  if (window.innerWidth < 1025) {
    // Code to execute when body width is less than 1200px
    document.getElementById("manu").style.height = "0";
    document.getElementById("close-manu").style.display = "none";
    document.getElementById("nav-list").style.display = "none";
}
 
}
