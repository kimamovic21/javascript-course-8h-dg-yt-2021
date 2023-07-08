// 18. Classes

class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = 'original';
        this.toppings = [];
    };
    getCrust() {
        return this.crust;
    };
    setCrust(pizzaCrust) {
        return this.crust = pizzaCrust;
    };
    getToppings() {
        return this.toppings;
    };
    setToppings(topping) {
        this.toppings.push(topping);
    };
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    };
};
const myPizza = new Pizza('pepperoni', 'small');
myPizza.bake();
myPizza.setCrust('thin');
console.log(myPizza.getCrust());
myPizza.setToppings('sausage');
myPizza.setToppings('olives');
console.log(myPizza.getToppings());
