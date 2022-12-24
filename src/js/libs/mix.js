import mixitup from "mixitup";

if (document.querySelector(".catalog-inner")) {
   const mixer = mixitup(".catalog-inner", {
      selectors: {
         target: ".sales-card",
      }
   })
}