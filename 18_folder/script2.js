// 18. Classes

class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = 'original';
    };
    getCrust() {
        return this.crust;
    };
    setCrust(pizzaCrust) {
        return this.crust = pizzaCrust;
    };
};

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = 'The Works';
    };
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    };
};

// parent is blue print
const mySpecialty = new SpecialtyPizza('medium');
mySpecialty.slice(); 
