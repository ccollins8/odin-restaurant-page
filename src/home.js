// import Background from './images/background.jpg';

function loadHome() {

    const container = document.querySelector('.container')
    container.id = 'home';

    container.innerHTML = "";


    let p = document.createElement('p');
    p.textContent = "Quality you can taste";
    container.appendChild(p)

    p = document.createElement('p');
    p.textContent = "Made with love since 1918";
    container.appendChild(p);

    const image = document.createElement('img');
    image.src = 'pizza-chef.jpg'
    image.id = 'chef'
    container.appendChild(image)

    p = document.createElement('p');
    p.textContent = "Order now or come visit us"
    container.appendChild(p)

}

export default loadHome