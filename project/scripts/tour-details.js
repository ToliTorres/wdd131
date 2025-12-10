/******************** tour-detail.html ********************/
// Displays the selected tour and enables saving to favorites.
import { tours } from "./tours.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(location.search);
    const id = params.get("id");

    const tour = tours.find(t => t.id === id);
    const section = document.getElementById("details");

    if (!tour) {
        section.innerHTML = "<p>Tour not found.</p>";
        return;
    }

    section.innerHTML = `
        <h2>${tour.title}</h2>
        <img src="${tour.img}" loading="lazy" alt="${tour.title}" class="main-img">

        <div class="tour-meta">
            <p><strong>City:</strong> ${tour.city}</p>
            <p><strong>Season:</strong> ${tour.month}</p>
            <p><strong>Price:</strong> $${tour.price}</p>
            ${tour.duration ? `<p><strong>Duration:</strong> ${tour.duration}</p>` : ""}
        </div>

        ${tour.description ? `<p class="description">${tour.description}</p>` : ""}

        ${tour.includes ? `
        <h3>What's Included</h3>
        <ul class="includes">
            ${tour.includes.map(item => `<li>✔️ ${item}</li>`).join("")}
        </ul>` : ""}

        ${tour.excludes ? `
        <h3>Not Included</h3>
        <ul class="excludes">
            ${tour.excludes.map(item => `<li>✖️ ${item}</li>`).join("")}
        </ul>` : ""}

        ${tour.additional ? `
        <h3>Additional Information</h3>
        <ol class="additional">
            ${tour.additional.map(step => `<li>${step}</li>`).join("")}
        </ol>` : ""}

        ${tour.gallery ? `
        <h3>Gallery</h3>
        <div class="gallery">
            ${tour.gallery.map(img => `<img src="${img}" alt="Tour photo" loading="lazy">`).join("")}
        </div>` : ""}

        <button id="saveFav" class="cta">Save as Favorite</button>
    `;

    document.getElementById("saveFav").addEventListener("click", () => {
        localStorage.setItem("favoriteTour", tour.title);
        alert("Saved as favorite!");
    });
});
