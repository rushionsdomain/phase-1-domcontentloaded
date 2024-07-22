// Initial setup when the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const pElement = document.querySelector("p");

  if (pElement) {
    pElement.textContent = "This is really cool!";
  }
});

window.onload = function () {
  const pElement = document.querySelector("p");

  if (!pElement) {
    const newP = document.createElement("p");
    newP.textContent =
      "JavaScript is so cool. It lets me add text to my page programmatically.";
    document.body.appendChild(newP);
  } else {
    pElement.textContent =
      "JavaScript is so cool. It lets me add text to my page programmatically.";
  }
};
