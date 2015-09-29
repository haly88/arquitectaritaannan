/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

  $(".portfolio-box").on("click", function() {
  $('#imagepreview').attr('src', $(this).find('img').attr('src')); // here asign the image to the modal when the user click the enlarge link
  $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
  });

  var imagenes1=new Array(
    'img/portfolio/1.jpg',
    'img/portfolio/2.jpg',
    'img/portfolio/3.jpg',
    'img/portfolio/4.jpg',
    'img/portfolio/5.jpg'
  );

  var imagenes2=new Array(
    'img/portfolio/6.jpg',
    'img/portfolio/7.jpg',
    'img/portfolio/8.jpg',
    'img/portfolio/9.jpg',
    'img/portfolio/10.jpg'
  );
  var imagenes3=new Array(
    'img/portfolio/11.jpg',
    'img/portfolio/12.jpg',
    'img/portfolio/13.jpg',
    'img/portfolio/14.jpg',
    'img/portfolio/15.jpg'
  );
  var imagenes4=new Array(
    'img/portfolio/16.jpg',
    'img/portfolio/17.jpg',
    'img/portfolio/18.jpg',
    'img/portfolio/19.jpg',
    'img/portfolio/20.jpg'
  );
  var imagenes5=new Array(
    'img/portfolio/21.jpg',
    'img/portfolio/22.jpg',
    'img/portfolio/23.jpg',
    'img/portfolio/24.jpg',
    'img/portfolio/25.jpg'
  );
  var imagenes6=new Array(
    'img/portfolio/26.jpg',
    'img/portfolio/27.jpg',
    'img/portfolio/28.jpg',
    'img/portfolio/29.jpg',
    'img/portfolio/30.jpg'
  );
  var index = 0;
 
    /**
    * Funcion para cambiar la imagen
    */
    function rotarImagenes1()
    {

      if(index == 4){
        index = 0;
      }else{
        index = index+1;
      };
      // cambiamos la imagen
      document.getElementById("imageresource1").src=imagenes1[index];
      document.getElementById("imageresource4").src=imagenes4[index];
    }

     function rotarImagenes2()
    {

      // cambiamos la imagen

      document.getElementById("imageresource2").src=imagenes2[index];
      document.getElementById("imageresource5").src=imagenes5[index];
 
    }

     function rotarImagenes3()
    {

      // cambiamos la imagen
      document.getElementById("imageresource3").src=imagenes3[index];
      document.getElementById("imageresource6").src=imagenes6[index];
    }
 
    /**
    * Función que se ejecuta una vez cargada la página
    */
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes1();
        rotarImagenes2();
        rotarImagenes3();

 
        // Indicamos que cada 5 segundos cambie la imagen
        setInterval(rotarImagenes1,5000);
        setInterval(rotarImagenes2,5100);
        setInterval(rotarImagenes3,5200);
    }

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
