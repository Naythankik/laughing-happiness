const hamburger = document.querySelector('.hamburger');
const dropDown = document.querySelector('.sticky-container');

hamburger.addEventListener('click', () => {
  dropDown.classList.toggle('sticky-containers-hamburger')
})