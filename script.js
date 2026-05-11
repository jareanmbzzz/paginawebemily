const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.sidebar nav a');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.12
});

sections.forEach((section) => {
  revealObserver.observe(section);
});

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove('active'));
      const activeLink = document.querySelector(`.sidebar nav a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, {
  rootMargin: '-35% 0px -50% 0px',
  threshold: 0
});

sections.forEach((section) => {
  activeObserver.observe(section);
});
