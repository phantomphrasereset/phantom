const menuToogle = document.getElementById('menu-toogle');
const navList = document.querySelector('.nav-list');

menuToogle.addEventListener('click', () => {
    navList.classList.toggle('show');
});