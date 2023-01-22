$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

$('.next-button').on('click', function() {
  var currentItem = $('.content-item:visible');
  var nextItem = currentItem.next('.content-item');
  if (nextItem.length) {
    currentItem.hide();
    nextItem.show();
  }
});

$('.prev-button').on('click', function() {
  var currentItem = $('.content-item:visible');
  var prevItem = currentItem.prev('.content-item');
  if (prevItem.length) {
    currentItem.hide();
    prevItem.show();
  }
});

var images = document.querySelectorAll(".my-image");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function(){
    var imageSrc = this.src;
    window.open(imageSrc, "_blank");
  });
}

const menuButton = document.getElementById("menu");
const header = document.querySelector("header");

menuButton.addEventListener("click", function() {
  header.style.background = "rgba(36, 33, 33, 1)";
});

$("#button-17-theme a").click(function(e){
  e.preventDefault();
  window.location.href = $(this).attr("href");
});
