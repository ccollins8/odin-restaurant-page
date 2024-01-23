import loadHome from "./home";

function loadPage() {
    const content = document.querySelector('#content');

    // Header

    const header = document.createElement('div');
    header.classList.add('header')
    content.appendChild(header);

    let h1 = document.createElement('h1');
    h1.textContent = "Ray's Pizza"
    header.appendChild(h1);

    let nav = document.createElement('div');
    nav.classList.add('nav')
    header.appendChild(nav);

    const navItems = ['Home', 'Menu', 'Contact'];
    navItems.forEach((element) => {
        const item = document.createElement('button');
        item.id = element.toLowerCase()
        item.textContent = element;
        nav.appendChild(item)
    });

    // Main

    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main)

    loadHome()

    // Footer

    const footer = document.createElement('div');
    footer.classList.add('footer');
    content.appendChild(footer)

    let h3 = document.createElement('h3');
    h3.textContent = "Created by Corey Collins"
    footer.appendChild(h3)

}

export default loadPage


