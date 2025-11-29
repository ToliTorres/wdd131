// Display current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});

// Array of Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Bahía Blanca Argentina",
        location: "Bahia Blanca, Argentina",
        dedicated: "2025, November, 23",
        area: 23400,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191.jpg"
    },
    {
        templeName: "Kirtland",
        location: "Kirtland, Ohio, United States",
        dedicated: "1836, March, 27",
        area: 15000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-59480.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27-30",
        area: 54000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-30723.jpg"
    }
];

createTempleCard(temples);

function createTempleCard(list) {
    const grid = document.querySelector(".temple-grid");
    grid.innerHTML = "";

    list.forEach(t => {
        const figure = document.createElement("figure");

        figure.innerHTML = `
            <img src="${t.imageUrl}"
            srcset="${t.imageUrl} 400w, ${t.imageUrl} 250w"
            alt="${t.templeName} Temple"
            width="400" height=auto
            loading="lazy">
            <figcaption>
                <h3>${t.templeName}</h3>
                <p><strong>Location:</strong> ${t.location}</p>
                <p><strong>Dedicated:</strong> ${t.dedicated}</p>
                <p><strong>Size:</strong> ${t.area} sq ft</p>
            </figcaption>
        `;

        grid.appendChild(figure);
    });
}

document.querySelectorAll("#main-nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the link from reloading the page
        const filter = event.target.dataset.filter;

        applyFilter(filter);
    });
});

function applyFilter(filter) {
    let filteredList = temples; // By default it shows everything

    switch (filter) {
        case "old":
            // temples built before 1900
            filteredList = temples.filter(t => {
                const year = parseInt(t.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;

        case "new":
            // temples built after 2000
            filteredList = temples.filter(t => {
                const year = parseInt(t.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;

        case "large":
            // temples larger than 90,000 square feet
            filteredList = temples.filter(t => t.area > 90000);
            break;

        case "small":
            // temples smaller than 10,000 square feet
            filteredList = temples.filter(t => t.area < 10000);
            break;

        case "home":
        default:
            filteredList = temples;
    }

    createTempleCard(filteredList);
}