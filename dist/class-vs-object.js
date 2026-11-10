class Car {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
}
const myCar = new Car("Toyota", "Black");
const myCar2 = new Car("Corola", "white");
console.log(myCar.brand);
console.log(myCar.color);
console.log(myCar2.brand);
console.log(myCar2.color);
export {};
