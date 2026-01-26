// Selecting elements using DOM
const button = document.getElementById("changeTextBtn");
const aboutText = document.getElementById("aboutText");

// Button click event
button.addEventListener("click", function () {
    console.log("Button clicked"); // debugging

    // Change text dynamically
    aboutText.textContent = "I love building interactive and responsive websites using HTML, CSS, and JavaScript.";

    // Toggle class for style change
    aboutText.classList.toggle("highlight");
});
