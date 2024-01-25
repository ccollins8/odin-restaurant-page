function loadMenu() {
    const container = document.querySelector('.main .container');

    container.innerHTML = "";

    // Menu Content

    // Create an menu object constructor/class

    const pizzas = []

    class menuItem {

        constructor(name, toppings) {
            this.name = name;
            this.toppings = 'Cheese, ' + toppings;
        }

    }

    // Create Cheese pizza object, pepperoni, etc

    let cheese = new menuItem("Cheese","Marinara sauce and cheese" );
    pizzas.push(cheese)

    let pepperoni = new menuItem("Pepperoni", "Peppernoni, Maranara sauce, and cheese")
    pizzas.push(pepperoni)

    let supreme = new menuItem("Supreme", "Italien sausage, marinara sauce, and cheese")
    pizzas.push(supreme)

    pizzas.forEach((pizza) => {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        
    })
    
    

}

export default loadMenu