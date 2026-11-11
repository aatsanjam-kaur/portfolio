
/* =========================================
   1. INITIALIZE LUCIDE ICONS
========================================= */
document.addEventListener("DOMContentLoaded",()=>{
    lucide.createIcons();
})



/* =========================================
   2. DYNAMIC COPYRIGHT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* =========================================
   3. ABOUT ME MODAL
========================================= */

const modal = document.getElementById("aboutModal");

const closeButton = document.getElementById("closeModal");

const openButtons = document.querySelectorAll("[data-open-modal]");


// Open modal

function openModal() {

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    closeButton.focus();

}


// Close modal

function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

}


// Attach event listeners to all open buttons

openButtons.forEach((button) => {

    button.addEventListener("click", openModal);

});


// Close button

closeButton.addEventListener("click", closeModal);


// Close when clicking outside the modal

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeModal();

    }

});


// Close using Escape key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && modal.classList.contains("active")) {

        closeModal();

    }

});


/* =========================================
   4. PROJECT FILTERING
========================================= */

const filterButtons = document.querySelectorAll(".filter-button");

const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Get selected category

        const selectedFilter = button.dataset.filter;


        // Update active button

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        // Filter projects

        projectCards.forEach((card) => {

            const projectCategory = card.dataset.category;

            if (
                selectedFilter === "all" ||
                selectedFilter === projectCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});
