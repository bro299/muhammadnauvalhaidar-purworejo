// Efek scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi sederhana untuk header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#A0522D';
    } else {
        header.style.backgroundColor = '#8B4513';
    }
});

// Tombol kembali ke atas
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#8B4513';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Toggle menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.classList.contains('menu-toggle')) {
        navMenu.classList.remove('show');
    }
});

// Dropdown functionality for mobile
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});