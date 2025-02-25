// script.js
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const pages = document.querySelectorAll(".page");

    // Function to show the selected page and hide others
    function showPage(pageId) {
        pages.forEach((page) => {
            if (page.id === pageId) {
                page.classList.add("active");
            } else {
                page.classList.remove("active");
            }
        });
    }

    // Add click event listeners to navigation links
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default link behavior
            const pageId = this.getAttribute("data-page"); // Get the data-page attribute
            showPage(pageId); // Show the selected page
        });
    });

    // Show the home page by default
    showPage("home");
});

// Search functionality
function searchContent() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const sections = document.querySelectorAll(".page");

    sections.forEach((section) => {
        const sectionText = section.textContent.toLowerCase();
        if (sectionText.includes(searchTerm)) {
            section.style.display = "block"; // Show matching section
        } else {
            section.style.display = "none"; // Hide non-matching sections
        }
    });
}