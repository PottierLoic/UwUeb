var circle_index = document.getElementById("circle-index");
var circle_cv = document.getElementById("circle-cv");
var circle_portfolio = document.getElementById("circle-portfolio");
var circle_blog = document.getElementById("circle-blog");
var circle_connect = document.getElementById("circle-connect");
var circle_contact = document.getElementById("circle-contact");
var circle_start = document.getElementById("starting-circle");

var button_index = document.getElementById("index-button");
var button_cv = document.getElementById("cv-button");
var button_portfolio = document.getElementById("portfolio-button");
var button_blog = document.getElementById("blog-button");
var button_connect = document.getElementById("connect-button");
var button_contact = document.getElementById("contact-button");

button_index.addEventListener("click", function(event) {
  event.preventDefault();
  var href = button_index.querySelector("a").href;

  circle_index.style.width = "10000px";
  circle_index.style.height = "10000px";
  circle_index.style.top = "-" + window.innerHeight + "px";
  circle_index.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 750);
});

button_cv.addEventListener("click", function(event) {
  event.preventDefault();
  var href = button_cv.querySelector("a").href;

  circle_cv.style.width = "10000px";
  circle_cv.style.height = "10000px";
  circle_cv.style.top = "-" + window.innerHeight + "px";
  circle_cv.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 750);
});

button_portfolio.addEventListener("click", function(event) {
  event.preventDefault();
  var href = button_portfolio.querySelector("a").href;

  circle_portfolio.style.width = "10000px";
  circle_portfolio.style.height = "10000px";
  circle_portfolio.style.top = "-" + window.innerHeight + "px";
  circle_portfolio.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 750);
});

button_blog.addEventListener("click", function(event) {
  event.preventDefault();
  var href = button_blog.querySelector("a").href;

  circle_blog.style.width = "10000px";
  circle_blog.style.height = "10000px";
  circle_blog.style.top = "-" + window.innerHeight + "px";
  circle_blog.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 750);
});

button_connect.addEventListener("click", function(event) {
  event.preventDefault();
  var href = button_connect.querySelector("a").href;

  circle_connect.style.width = "10000px";
  circle_connect.style.height = "10000px";
  circle_connect.style.top = "-" + window.innerHeight + "px";
  circle_connect.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 750);
});

button_contact.addEventListener("click", function(event) {
  event.preventDefault();
  var href = button_contact.querySelector("a").href;

  circle_contact.style.width = "10000px";
  circle_contact.style.height = "10000px";
  circle_contact.style.top = "-" + window.innerHeight + "px";
  circle_contact.style.opacity = "1";

  setTimeout(function() {
    window.location.href = href;
  }, 750);
});

function set_circle_position(circle, element) {
  var rect = element.getBoundingClientRect();
  var center_y = rect.top;

  circle.style.top = center_y + "px";
}

window.onload = function() {
  set_circle_position(circle_index, button_index);
  set_circle_position(circle_cv, button_cv);
  set_circle_position(circle_portfolio, button_portfolio);
  set_circle_position(circle_blog, button_blog);
  set_circle_position(circle_connect, button_connect);
  set_circle_position(circle_contact, button_contact);

  set_circle_position(circle_start, circle_start.parentNode);
  circle_start.style.width = '0';
  circle_start.style.height = '0';
};


