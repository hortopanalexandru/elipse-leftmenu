//Select DOM ITEMS
const menuBtn = document.querySelector('.menu-btn'),
    menuList = document.querySelector('.list'),
    menuUl = document.querySelector('.ul-list'),
    navItems = document.querySelectorAll('.list-items'),
    menuSocialize = document.querySelector('.socialize'),
    socializeItems = document.querySelectorAll('.socilize-item');

//Set initial state of menu;
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('show');
        menuList.classList.add('show');
        menuUl.classList.add('show');
        menuSocialize.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));
        socializeItems.forEach(item => item.classList.add('show'));

        //Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('show');
        menuList.classList.remove('show');
        menuUl.classList.remove('show');
        menuSocialize.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        socializeItems.forEach(item => item.classList.remove('show'));

        //Set menu state 
        showMenu = false;
    }
}