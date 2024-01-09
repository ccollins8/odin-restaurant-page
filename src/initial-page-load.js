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
        item.textContent = element;
        nav.appendChild(item)
    });

    // Main

    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main)

    let p = document.createElement('p');
    p.textContent = "Quality you can taste";
    main.appendChild(p)

    p = document.createElement('p');
    p.textContent = "Made with love since 1918";
    main.appendChild(p);

    const image = document.createElement('img');
    image.setAttribute('src','')




}

export default loadPage


