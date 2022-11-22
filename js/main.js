(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

$(function(){ 

    $("#verification").click(function(){
      $(".modal").fadeIn();
    });
    
    $(".modal_content").click(function(){
      $(".modal").fadeOut();
    });
    
  });



  function doImgPop(img){
    img1= new Image();
    img1.src=(img);
    imgControll(img);
   }
    
   function imgControll(img){
    if((img1.width!=0)&&(img1.height!=0)){
       viewImage(img);
     }
     else{
        controller="imgControll('"+img+"')";
        intervalID=setTimeout(controller,20);
     }
   }
   
   function viewImage(img){
    W=img1.width;
    H=img1.height;
    O="width="+W+",height="+H+",scrollbars=yes";
    imgWin=window.open("","",O);
    imgWin.document.write("<html><head><title>이미지상세보기</title></head>");
    imgWin.document.write("<body topmargin=0 leftmargin=0>");
    imgWin.document.write("<img src="+img+" onclick='self.close()' style='cursor:pointer;' title ='클릭하시면 창이 닫힙니다.'>");
    imgWin.document.close();
   }




   let imageIndex = 0;
   let postion = 0;
   const IMAGE_WIDTH = 100;
   const btnPrevious = document.querySelector(".previous")
   const btnNext = document.querySelector(".next")
   const smimages = document.querySelector(".smimages")

   function prev(){
    if(imageIndex > 0) {
        btnNext.removeAttribute("disabled")
        postion += IMAGE_WIDTH;
        smimages.style.transform = `translateX(${postion}%)`;
        imageIndex = imageIndex -1;
    }
    if(imageIndex == 0) {
        btnPrevious.setAttribute('disabled', 'true')
    }
   }

   function next(){
    if(imageIndex < 5) {
        btnPrevious.removeAttribute("disabled")
        postion -= IMAGE_WIDTH;
        smimages.style.transform = `translateX(${postion}%)`;
        imageIndex = imageIndex +1;
    }
    if(imageIndex == 5) {
        btnNext.setAttribute('disabled', 'true')
    }

   }

   function init(){
    btnPrevious.setAttribute('disabled','true')
    btnPrevious.addEventListener("click", prev)
    btnNext.addEventListener("click",next)
   }

   init();
   