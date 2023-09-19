let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top',
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('h3', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 200,
    reset: true
  });
  
  ScrollReveal().reveal('h1', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 400,
    reset: true
  });
  
  ScrollReveal().reveal('h3 span', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 600,
    reset: true
  });
  
  ScrollReveal().reveal('p', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 800,
    reset: true
  });
  ScrollReveal().reveal('.home-img', {
    origin: 'left',
    distance: '100px',
    duration: 1000,
    delay: 100,
    reset: true,
    afterReveal: (el) => {
      el.classList.add('floating');
    },
    beforeReset: (el) => {
      el.classList.remove('floating');
    }
  });
  

  
  

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', {
    origin: 'bottom'
});

ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
