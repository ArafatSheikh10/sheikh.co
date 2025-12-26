$(document).ready(function() {

    // ==== Aos Start

    AOS.init();

    // ==== Aos End

    //===== Sticky Menu-Bar Start

    window.onscroll = function() {stickyNavbar()};

    var navbar = document.querySelector(".nav-area");
    
    var stickyPoint = 100;
    
    function stickyNavbar() {
      if (window.pageYOffset >= stickyPoint) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
    //===== Sticky Menu-Bar End

    //==== Nav Menu Slider Start

        $('.nav_trigger').click(function(){
            $('.sidebar, .overlay').addClass('slide_sidebar');
        })

        $('.nav_dismess, .overlay, .sidebar .nav-menu a').click(function(){
            $('.sidebar, .overlay').removeClass('slide_sidebar');
        })

    //==== Nav Menu Slider End
    

    // ==== Section Select Start
    $('.nav-menu a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        
        if (target.length) {
            var offset = $(window).width() < 768 ? 50 : 70;
    
            $('html, body').animate({
                scrollTop: target.offset().top - offset 
            }, 1000);
        }
    });
    // ==== Section Select End


});




    
