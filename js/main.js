/* ============= NAVBAR =============== */

let menuIcon = document.querySelector('meni-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ============= ACTIVE LINK =============== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').
                classList.add('active');
            });
        };
    });

/* ============= STICK NAVBAR =============== */
   let header = document.querySelector('header')
   header.classList.toggle('stick', window.scrollY > 100);
/* ============= STICK NAVBAR =============== */
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
}

/* ============= SCROLL REVEAL =============== */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});

const typed = new Typed('.multiple-text', {
    strings:['Desenvolvedor Web', 'Web Designer', 'Youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
})