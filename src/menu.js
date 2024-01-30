import cheese from "./images/cheese.jpg"

function loadMenu() {
    const container = document.querySelector('.main .container');

    container.innerHTML = "";

    // Menu Content

    // Create an menu object constructor/class

    const pizzas = []

    class menuItem {

        constructor(name, toppings, image) {
            this.name = name;
            this.toppings = 'Cheese, ' + toppings;
            this.image = new Image();
            this.image.src = image;
        }

    }

    // Create Cheese pizza object, pepperoni, etc

    // let cheese = new menuItem("Cheese",
    // "Marinara sauce and cheese", 'src/images/pizza-chef.jpg');
    // pizzas.push(cheese)

    // Create a Cheese pizza object with image
    const cheesePizza = new menuItem(
        "Cheese", 
        "Marinara sauce", 
        cheese);
    pizzas.push(cheesePizza);

    let pepperoni = new menuItem("Pepperoni", "Peppernoni, Maranara sauce, and cheese")
    pizzas.push(pepperoni)

    let supreme = new menuItem("Supreme", "Italien sausage, marinara sauce, and cheese")
    pizzas.push(supreme)

    pizzas.forEach((pizza) => {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        const image = document.createElement('img');
        card.appendChild(image)

        const name = document.createElement('h3');
        name.textContent = pizza.name;
        card.appendChild(name);

        const description = document.createElement('p');
        description.textContent = pizza.toppings
        card.appendChild(description)
    })
    
    

}

export default loadMenu