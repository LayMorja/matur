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
   });

   if ($(".sales-slider .sales-card").length > 3) {
      $(".sales-slider").slick({
         dots: false,
         arrow: true,
         infinite: false,
         slidesToShow: 3,
         prevArrow: $(".sales__prev"),
         nextArrow: $(".sales__next"),
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
});