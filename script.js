function toggleDropdown(element) {
    const dropdowns = document.querySelectorAll('.menu-item .dropdown-content');
    dropdowns.forEach(dropdown => {
        if (dropdown !== element.querySelector('.dropdown-content')) {
            dropdown.style.display = 'none';
            dropdown.parentElement.classList.remove('active');
        }
    });

    const dropdownContent = element.querySelector('.dropdown-content');
    const isActive = dropdownContent.style.display === 'block';
    if (isActive) {
        dropdownContent.style.display = 'none';
        element.classList.remove('active');
    } else {
        dropdownContent.style.display = 'block';
        element.classList.add('active');
    }
}
window.onclick = function(event) {
    if (!event.target.matches('.menu-item, .menu-item *')) {
        const dropdowns = document.querySelectorAll('.menu-item .dropdown-content');
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
            dropdown.parentElement.classList.remove('active');
        });
    }
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const hamburguer = document.querySelector('.menu-hamburguer');
    
    menu.classList.toggle('active');
    hamburguer.classList.toggle('open');
}
