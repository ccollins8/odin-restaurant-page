
import loadHome from "./home";
import loadPage from "./initial-page-load";
import loadMenu from "./menu";
import loadContact from "./contact";

loadPage();


const homeLink = document.querySelector('#home')
const menuLink = document.querySelector('#menu')
const contactLink = document.querySelector('#contact')

homeLink.addEventListener('click', () => {
    loadHome();
})

menuLink.addEventListener('click', () => {
    loadMenu();
})

contactLink.addEventListener('click', () => {
    loadContact();
})



