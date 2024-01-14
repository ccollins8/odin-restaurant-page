function loadHome() {

    // const home = document.createElement('div')
    // home.classList.add('home')

    const main = document.querySelector('.main')


    let p = document.createElement('p');
    p.textContent = "Quality you can taste";
    main.appendChild(p)

    p = document.createElement('p');
    p.textContent = "Made with love since 1918";
    main.appendChild(p);

    const image = document.createElement('img');
    image.setAttribute('src','')

}

export default loadHome