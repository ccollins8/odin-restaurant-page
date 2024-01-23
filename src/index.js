
import loadPage from "./initial-page-load";
import loadMenu from "./menu";

loadPage();

const menuLink = document.querySelector('#menu')

menuLink.addEventListener('click', () => {
    loadMenu();
})



