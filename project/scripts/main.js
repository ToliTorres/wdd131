/******************** Common JS for all pages ********************/
// Highlight current page in nav
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const current = location.pathname.split("/").pop();

    links.forEach(a => {
        if (a.getAttribute("href") === current) {
            a.setAttribute("aria-current", "page");
        }
    });
});

// Mobile menu
const hamburgerBtn = document.getElementById("hamburger-btn");
const mainMenu = document.getElementById("main-menu");

if (hamburgerBtn && mainMenu) {
    hamburgerBtn.addEventListener("click", () => {
        mainMenu.classList.toggle("active");
        hamburgerBtn.setAttribute("aria-expanded",
            mainMenu.classList.contains("active")
        );
    });
}

// Carousel
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const cards = Array.from(document.querySelectorAll(".tour-card"));

    if (!track || cards.length === 0) return;

    const totalCards = cards.length;

    /*  DUPLICATE NODES → Makes the carousel infinite */
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let index = 0;

    function updateCarousel() {
        const cardWidth = cards[0].offsetWidth + 20; // 20 = gap
        track.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    function next() {
        index++;
        updateCarousel();

        /* When it reaches the end of the duplicates, it resets without skipping. */
        if (index >= totalCards) {
            setTimeout(() => {
                track.style.transition = "none";
                index = 0;
                updateCarousel();
                setTimeout(() => track.style.transition = "transform 0.5s ease", 20);
            }, 500);
        }
    }

    function prev() {
        index--;
        if (index < 0) {
            track.style.transition = "none";
            index = totalCards - 1;
            updateCarousel();
            setTimeout(() => track.style.transition = "transform 0.5s ease", 20);
        } else {
            updateCarousel();
        }
    }

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", next);
        prevBtn.addEventListener("click", prev);
    }

    /* Autoplay every 5 seconds */
    setInterval(next, 5000);
});

// Footer Date
document.getElementById("currentyear").textContent = new Date().getFullYear();


/******************** contact.html ********************/
// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        // Avoid shipping for now
        e.preventDefault(); 

        const checks = [...document.querySelectorAll("input[name='interest']")];
        const selected = checks.some(c => c.checked);

        if (!selected) {
            showError("Please select at least one interest.");
            return;
        }

        // Show success message
        showToast("Message sent! ✅");
        
        // Clear form
        form.reset();
    });
});

function showError(msg) {
    let box = document.getElementById("formError");

    if (!box) {
        box = document.createElement("p");
        box.id = "formError";
        box.className = "form-error";
        document.querySelector("form").prepend(box);
    }

    box.textContent = msg;
}

// Function to display toast
function showToast(msg) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(() => toast.style.opacity = "1", 100);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 500);
    }, 2000); // disappears after 2 seconds
}

// Removes error message when changing checkboxes
const checks = document.querySelectorAll("input[name='interest']");
checks.forEach(c => c.addEventListener("change", () => {
    const box = document.getElementById("formError");
    if (box) box.remove();
}));