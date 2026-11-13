class Shorom {
    brand;
    color;
    _price;
    constructor(brand, color, _price) {
        this.brand = brand;
        this.color = color;
        this._price = _price;
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
}
const User = new Shorom("Corola", "white", 2000000);
console.log(User);
console.log("Brand:", User.brand);
console.log("Color:", User.color);
User.price = 3000000;
console.log("Price:", User.price);
export {};
