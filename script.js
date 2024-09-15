// Dark Mode Toggle Functionality
const darkModeSwitch = document.getElementById('darkModeSwitch');
const darkModeIcon = document.getElementById('darkModeIcon');

darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        darkModeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



