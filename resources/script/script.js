const mobileNav = document.getElementById('mobile-nav');
const navBar = document.getElementById('navigation');

mobileNav.addEventListener('touchstart', ()=> {
    navBar.style.display === 'none' ? navBar.style.display = 'flex' :  navBar.style.display = 'none' ;
})
