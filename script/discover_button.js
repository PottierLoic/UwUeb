let discover_button = document.getElementById("discover_button");

discover_button.addEventListener("click", function() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
});