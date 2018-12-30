$(document).ready(function(){


	$('header nav li a').click(function(){
	$('html , body').animate({
    scrollTop : $('#' + $(this).data('value')).offset().top},1000);
    });



    $('.search-icon').on('click', function() {
        $('.top-search').slideToggle();
       
        
      });
      $(".input-group-addon.close-search").on("click", function(){
        $(".top-search").slideUp();

    });

    $('.time').countTo(); // Run Count To Plugin
    $(window).off('scroll');


    
    $('.slide-content').slick(
        {
            slidesToShow: 4,
             slidesToScroll: 1,
              infinite: true,
             
             speed: 700,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows:false,
            dots:true,
            responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
      
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        }
        ),
        $('.logo-slider').slick(
          {
              slidesToShow:5,
               slidesToScroll: 1,
                infinite: true,
               
               speed: 500,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:true,
              
              responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:4,
                slidesToScroll: 1,
                infinite: true,
        
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
          }
          ),

        $('.product-slider').slick(
          {
              slidesToShow: 4,
               slidesToScroll: 1,
                infinite: true,
               
               speed: 700,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:true,
              dots:true,
              responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
        
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow:1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
          }
          );
                
        
              
          });
          
          function myFunction(imgs) {
            var expandImg = document.getElementById("expandedImg");
            var imgText = document.getElementById("imgtext");
            expandImg.src = imgs.src;
            imgText.innerHTML = imgs.alt;
            expandImg.parentElement.style.display = "block";
        }  

        
//---------------------------------------------
// Scroll Up 
//---------------------------------------------

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });


    //------------------------------------------------------
    // show map 
    //------------------------------------------------------
    function showmap() {
			var mapOptions = {
				zoom: 8,
				scrollwheel: false,
				center: new google.maps.LatLng(-34.397, 150.644),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
			$('.mapheight').css('height', '350');
			$('.maps_text h3').hide();
		}


      

  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
  };
