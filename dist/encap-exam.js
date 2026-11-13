class Shorom {
    brand;
    color;
    price;
    constructor(brand, color, price) {
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
}
const User = new Shorom("Corola", "white", 2000000);
console.log(User);
console.log("Brand:", User.brand);
console.log("Color:", User.color);
console.log("Price:", User.price);
export {};
