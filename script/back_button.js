let btn = document.getElementById('back_button');
let html = document.documentElement;

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  html.animate({scrollTop:0}, '300');
});

