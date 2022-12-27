// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

const fileInputs = document.querySelectorAll("input[type='file']");
if (fileInputs.length) {
   fileInputs.forEach(input => {
      const label = input.previousElementSibling;
      input.addEventListener("change", (event) => {
         if (label.tagName == "LABEL") {
            const fileName = input.files[0].name;
            label.querySelector("span").textContent = fileName.length > 10 ? fileName.slice(0, 10) + '...' : fileName;
         }
      })
   })
}

$(function() {
   $('.hero__slider').on('init', function(event, slick){
      let dots = $(".hero__pagination .slick-dots li");
      dots.each( function(k, v){
         let text = $(this).find("button").text() + ".";
         if (+text < 10) {
            text = "0" + text
         }
         $(this).find("button").text(text);
      });
   });

   $(".hero__slider").slick({
      dots: true,
      arrows: false,
      appendDots: $(".hero__pagination"),
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1200,
   });

   $(".choose__body").slick({
      dots: false,
      arrows: false,
      autoplay: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplaySpeed: 1500,
      slidesToShow: 5,
      infinite: true,
      responsive: [
         {
            breakpoint: 1070,
            settings: {
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 870,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 640,
            settings: {
               slidesToShow: 2,
               centerMode: true,
            }
         },
         {
            breakpoint: 540,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   })

   if ($(".sales-slider .sales-card").length > 3) {
      $(".sales-slider").slick({
         dots: false,
         arrow: true,
         infinite: false,
         slidesToShow: 3,
         prevArrow: '<button class="sales__prev" aria-label="Previous" type="button"><svg><use xlink:href="../img/sprite.svg#slider-button"></svg></button>',
         nextArrow: '<button class="sales__next" aria-label="Next" type="button"><svg><use xlink:href="../img/sprite.svg#slider-button"></svg></button>',
         responsive: [
            {
               breakpoint: 768,
               settings: {
                  arrows: false,
                  slidesToShow: 2
               }
            },
            {
               breakpoint: 540,
               settings: {
                  arrows: false,
                  slidesToShow: 1
               }
            },
         ]
      })
   }


   $(".product__big-slider").slick({
      slidesToShow: 1,
      prevArrow: '<button class="product__big-prev" aria-label="Previous" type="button"><svg><use xlink:href="../img/sprite.svg#right-arrow"></svg></button>',
      nextArrow: '<button class="product__big-next" aria-label="Next" type="button"><svg><use xlink:href="../img/sprite.svg#right-arrow"></svg></button>',
      dots: false,
      asNavFor: ".product__mini-slider",
      infinite: false,
   })

   $(".product__mini-slider").slick({
      prevArrow: "",
      nextArrow: '<button class="product__mini-next" aria-label="Next" type="button"><svg><use xlink:href="../img/sprite.svg#slider-button"></svg></button>',
      dots: false,
      asNavFor: ".product__big-slider",
      slidesToShow: 4,
      infinite: false,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               arrows: false,
            }
         },
         {
            breakpoint: 400,
            settings: {
               slidesToShow: 3,
               arrows: false,
            }
         }
      ]
   })

	var selector = '.product__big-slider .slick-slide';
   
	$().fancybox({
		selector : selector,
		backFocus : false,
		afterShow: function(instance, current) {
			current.opts.$orig.closest(".slick-initialized").slick('slickGoTo', parseInt(current.index), true);
		}
	});
});