// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

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
});