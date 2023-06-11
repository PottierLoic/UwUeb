const image_left = document.querySelectorAll('.project-image-left');
const image_right = document.querySelectorAll('.project-image-right');

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
}

window.addEventListener('scroll', animateElements);