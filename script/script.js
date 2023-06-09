var circle_index = document.getElementById("circle_index");
var circle_cv = document.getElementById("circle_cv");
var circle_portfolio = document.getElementById("circle_portfolio");
var circle_blog = document.getElementById("circle_blog");
var circle_connect = document.getElementById("circle_connect");
var circle_contact = document.getElementById("circle_contact");

var button_index = document.getElementById("index-button");
var button_cv = document.getElementById("cv-button");
var button_portfolio = document.getElementById("portfolio-button");
var button_blog = document.getElementById("blog-button");
var button_connect = document.getElementById("connect-button");
var button_contact = document.getElementById("contact-button");

document.addEventListener("DOMContentLoaded", start);

button_index.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  var href = button_index.querySelector("a").href; // Récupère la valeur de l'attribut href du lien à l'intérieur du bouton

  circle_index.style.width = "300vw";
  circle_index.style.height = "300vh";
  circle_index.style.top = "-" + window.innerHeight + "px";
  circle_index.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 500);
});

button_cv.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  var href = button_cv.querySelector("a").href; // Récupère la valeur de l'attribut href du lien à l'intérieur du bouton

  circle_cv.style.width = "300vw";
  circle_cv.style.height = "300vh";
  circle_cv.style.top = "-" + window.innerHeight + "px";
  circle_cv.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 500);
});

button_portfolio.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  var href = button_portfolio.querySelector("a").href; // Récupère la valeur de l'attribut href du lien à l'intérieur du bouton

  circle_portfolio.style.width = "300vw";
  circle_portfolio.style.height = "300vh";
  circle_portfolio.style.top = "-" + window.innerHeight + "px";
  circle_portfolio.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 500);
});

button_blog.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  var href = button_blog.querySelector("a").href; // Récupère la valeur de l'attribut href du lien à l'intérieur du bouton

  circle_blog.style.width = "300vw";
  circle_blog.style.height = "300vh";
  circle_blog.style.top = "-" + window.innerHeight + "px";
  circle_blog.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 500);
});

button_connect.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  var href = button_connect.querySelector("a").href; // Récupère la valeur de l'attribut href du lien à l'intérieur du bouton

  circle_connect.style.width = "300vw";
  circle_connect.style.height = "300vh";
  circle_connect.style.top = "-" + window.innerHeight + "px";
  circle_connect.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 500);
});

button_contact.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  var href = button_contact.querySelector("a").href; // Récupère la valeur de l'attribut href du lien à l'intérieur du bouton

  circle_contact.style.width = "300vw";
  circle_contact.style.height = "300vh";
  circle_contact.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 500);
});

function set_circle_position(circle, element) {
  var rect = button.getBoundingClientRect();
  var buttonCenterX = rect.left + rect.width / 2;
  var buttonBottomY = rect.bottom;

  circle.style.top = buttonBottomY+50 + "px";
  circle.style.left = buttonCenterX - circle.offsetWidth / 2 + "px";
}

function start() {
  set_circle_position(circle_index, button_index);
  set_circle_position(circle_cv, button_cv);
  set_circle_position(circle_portfolio, button_portfolio);
  set_circle_position(circle_blog, button_blog);
  set_circle_position(circle_connect, button_connect);
  set_circle_position(circle_contact, button_contact);
}


