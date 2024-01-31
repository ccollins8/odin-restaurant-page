import cheesePizza from "./images/cheese.jpg";
import pepperoniPizza from "./images/pepperoni-pizza.jpg";
import supremePizza from "./images/supreme-pizza.jpg"

function loadMenu() {
    const container = document.querySelector('.main .container');
    container.id = 'menu';

    container.innerHTML = "";

    // Menu Content

    // Create an menu object constructor/class

    const pizzas = []

    class menuItem {

        constructor(name, description, image) {
            this.name = name;
            this.description = description;
            this.image = image
        }

    }

    // Create Cheese pizza object, pepperoni, etc

    // let cheese = new menuItem("Cheese",
    // "Marinara sauce and cheese", 'src/images/pizza-chef.jpg');
    // pizzas.push(cheese)

    // Create a Cheese pizza object with image
    const cheese = new menuItem(
        "Cheese", 
        "Made with cheese and tomato sauce", 
        cheesePizza);
    pizzas.push(cheese);

    let pepperoni = new menuItem("Pepperoni", 
    "Made with cheese, tomato sauce, and pepperoni",
    pepperoniPizza)
    pizzas.push(pepperoni)

    let supreme = new menuItem("Supreme",
    "Made with cheese, tomato sauce, pepperoni, sausage, beef, mushrooms, green bell peppers, and onions",
    supremePizza)
    pizzas.push(supreme)

    let sausage = new menuItem("Sausage",
    "Made with cheese, tomato sauce, and sausage",
    supremePizza)
    pizzas.push(sausage)

    

    pizzas.forEach((pizza) => {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        const image = document.createElement('img');
        image.src = pizza.image
        image.classList.add('pizza')
        card.appendChild(image)

        const name = document.createElement('h3');
        name.textContent = pizza.name;
        card.appendChild(name);

        const description = document.createElement('p');
        description.textContent = pizza.description
        card.appendChild(description)
    })
    
    

}

export default loadMenu