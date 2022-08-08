$(document).ready(function(){
     
$('.slider').slick({
    // centerMode: true,
    slidesToShow: 3,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,

    

    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 300,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
   
  });
            
});


$(document).ready(function(){
     
  $('.slider__one').slick({
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,


    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 300,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]  
  });
    
  });
  
	



