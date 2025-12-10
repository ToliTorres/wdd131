/******************** tours.html ********************/
// Loads tours and activates filters on page load.
import { tours, renderTours, setupFilter } from "./tours.js";

document.addEventListener("DOMContentLoaded", () => {
    renderTours(tours);
    setupFilter();
});