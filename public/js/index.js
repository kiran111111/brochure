



// review --slider
var slideIndex = 1;
showSlides(1);

function plusSlides(n){
  showSlides(slideIndex += n)
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("review__slide");
  if (n < 1) {slideIndex = slides.length}
  if(n > slides.length){slideIndex=1}
  for(i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// accordian--for___FAQs
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





// Navbar change on scroll -*****************

$(document).ready(function(){
  $(window).scroll(function() { // check if scroll event happened
    var navs = $('#nav ul');
    if ($(document).scrollTop() < 10) { // check if user scrolled more than 50 from top of the browser window
      navs.children().children().removeClass();
      $('.head__nav').css('background-color', 'transparent');
     $(".head__nav").css('position', 'fixed');
     $(".head__nav").css('color', 'white');// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8) 
     $(".head__navbar ul li a ").css('color', 'white');
     $(".head__nav").css('box-shadow', 'none');
     $(".mobile__navbar .mobile__icon i").css('color', 'white');
    } else {
      $('.head__nav').css('background-color', 'transparent'); // if not, change it back to transparent
    }
  });
});


$(document).ready(function(){
  $(window).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 10) { // check if user scrolled more than 50 from top of the browser window
      $(".head__nav").css('background-color', 'white');// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
     $(".head__nav").css('position', 'fixed');
     $(".head__nav").css('color', 'black');// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8) 
     $(".head__navbar ul li a ").css('color', 'black');
     $(".mobile__navbar .mobile__icon i").css('color', 'black');
     $(".head__nav").css('box-shadow', '0px 0px 5px lightgrey');
    } else {
    
      $('.head__nav').css('background-color', 'transparent'); // if not, change it back to transparent
    }
  });
});





//jQuery for page scrolling feature - requires jQuery Easing plugin(****************)

$(function() {
  $('a.page-scroll').on('click', function(event) {
    var navs = $('#nav ul');
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 800);
      navs.children().children().removeClass();
      $anchor.addClass('active');
      event.preventDefault();
  });
});






//! Mobile_navbar
// const hamburgerEl = document.querySelector(".mobile__icon");
// const mobileNavEl = document.querySelector(".mobile__nav");
// console.log(hamburgerEl)
// hamburgerEl.addEventListener("click",function(){
//   if(mobileNavEl.style.display="none"){
//      mobileNavEl.style.display="block";
//   }else{
//     mobileNavEl.style.display="none";
//   }
// })

