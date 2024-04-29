console.log('js linked')
const hamburger = document.querySelector('.hamburger-lines');
const mobileNav = document.querySelector('.nav-links-mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('transform');
    mobileNav.classList.toggle('transform');
    // document.querySelector('.object-non-visible').classList.toggle('transform')
});

const logo = document.querySelector('.logo');

logo.addEventListener('click', function() {
  window.location.href = 'index.html'; 
});

