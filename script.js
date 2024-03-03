// ############################# toggle icon navbar #######################
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
// #########################scroll active effect ########################
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +  id +']').classList.add('active');
            });
        };
    });
    // ---------------------sticky nav bar ---------------------------

let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);
// ############################# remove toggle icon and navbar when click navbar link (scroll)##############
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

 // Show loading overlay and animation
 document.getElementById('layer').style.display = 'none';
 document.getElementById('loadingContainer').style.display = 'block';

 // Remove loading overlay and animation after 5 seconds
 setTimeout(() => {
   document.getElementById('layer').style.display = 'block';
   document.getElementById('loadingContainer').style.display = 'none';
 }, 3000);
