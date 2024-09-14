// Select the button and the menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

// Add click event listener to the button
menuBtn.addEventListener("click", function () {
  // Toggle the display of the menu
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block"; // Show the menu
  } else {
    menu.style.display = "none"; // Hide the menu
  }
});
