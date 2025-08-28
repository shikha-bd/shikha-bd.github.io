let currentLang = "en";

document.getElementById("lang-toggle").addEventListener("click", function() {
  const elements = document.querySelectorAll("[data-en]");

  if(currentLang === "en") {
    elements.forEach(el => {
      el.textContent = el.getAttribute("data-bn");
    });
    currentLang = "bn";
    this.textContent = "English"; // change button text
  } else {
    elements.forEach(el => {
      el.textContent = el.getAttribute("data-en");
    });
    currentLang = "en";
    this.textContent = "বাংলা";
  }
});
