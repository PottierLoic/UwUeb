let back_button = document.getElementById('back_button');

function scroll() {
  if (document.documentElement.scrollTop > 300) {
    back_button.classList.add('show');
  } else {
    back_button.classList.remove('show');
  }
}

back_button.addEventListener("click", function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", scroll);
