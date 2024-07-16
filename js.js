document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("._si-no");
    elements.forEach(function(element) {
        if (element.textContent.trim() === "Não") {
            element.classList.add("item-none");
        }
    });
});