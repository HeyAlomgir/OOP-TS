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
}
const User = new Shorom("Corola", "white", 2000000);
console.log(User);
console.log("Brand:", User.brand);
console.log("Color:", User.color);
console.log("Price:", User.price);
export {};
