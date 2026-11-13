class Shorom {
    constructor(
        public brand: string,
        public color: string,
        private _price: number,
    ) { }

    get price(): number {
        return this._price;
    }
    set price(newPrice: number) {
        this._price = newPrice;
    }


}

const User = new Shorom("Corola", "white", 2000000);
console.log(User)
console.log("Brand:", User.brand);
console.log("Color:", User.color);
User.price = 3000000;
console.log("Price:", User.price)