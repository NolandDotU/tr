document.addEventListener("DOMContentLoaded", function () {
    const description = document.getElementById("description");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function () {
        if (description.style.maxHeight) {
            description.style.maxHeight = null;
            toggleButton.textContent = "See More";
        } else {
            description.style.maxHeight = "100%";
            toggleButton.textContent = "See Less";
        }
    });
});
