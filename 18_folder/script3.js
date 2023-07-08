// 18. Classes

// private properties i fields
class Pizza {
    crust = 'original';
    #souce = 'traditional';
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    };
    getCrust() {
        return this.crust;
    };
    setCrust(pizzaCrust) {
        return this.crust = pizzaCrust;
    };
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#souce} sauce ${this.#size} pizza.`);
    };
};
const myPizza = new Pizza('large');
myPizza.hereYouGo();
console.log(myPizza.crust);
console.log(myPizza.souce);
console.log(myPizza.size);


// Factory Function
function pizzaFactory(pizzaSize) {
    const crust = 'original';
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
    }; 
};
const myPizza2 = pizzaFactory('small');
myPizza2.bake();
