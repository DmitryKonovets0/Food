import modal from "./modules/modal";
import slider from "./modules/slider";


window.addEventListener('DOMContentLoaded', () => {
    modal()
    slider('.offer__slider-prev', ".offer__slider-next", '.offer__slide', '#current', '#total')
})