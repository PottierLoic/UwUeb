const image_left = document.querySelectorAll('.project-image-left');
const image_right = document.querySelectorAll('.project-image-right');
const text_left = document.querySelectorAll('.project-text-left');
const text_right = document.querySelectorAll('.project-text-right');


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function animateElements() {
    image_left.forEach((element) => {
        if (isInViewport(element)) 
            element.classList.add('project-image-left--visible');
    });
    image_right.forEach((element) => {
        if (isInViewport(element)) 
            element.classList.add('project-image-right--visible');
    });
    text_left.forEach((element) => {
        if (isInViewport(element)) 
            element.classList.add('project-text-left--visible');
    });
    text_right.forEach((element) => {
        if (isInViewport(element)) 
            element.classList.add('project-text-right--visible');
    });
}

window.addEventListener('scroll', animateElements);