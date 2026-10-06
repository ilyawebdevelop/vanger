import "../scss/style.scss";
import { backgroundParallax } from "./files/animate.js";
import btnUp from "./files/btnUp.js";
import burger from "./files/burger.js";
import map from "./files/map.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import messageForm from "./files/messageForm.js";
import scrollables from "./files/scrollables.js";
import select from "./files/select.js";
import servicesItemShadow from "./files/servicesItemShadow.js";
import singleMoreToggle from "./files/singleMoreToggle.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";
import { Fancybox } from "./files/fancybox.esm.js";

AOS.init();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

spoller();
backgroundParallax();
scrollables();
select();
mediaAdaptive();
sliders();
burger();
messageForm();
servicesItemShadow();
singleMoreToggle();
map();
btnUp();