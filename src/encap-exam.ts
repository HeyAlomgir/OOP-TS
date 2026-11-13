class Shorom {
    constructor(
        public brand: string,
        public color: string,
        private _price: number,
    ) { }

    get price(): number {
        return this._price;
    }
}

const User = new Shorom("Corola", "white", 2000000);
console.log(User)
console.log("Brand:", User.brand);
console.log("Color:", User.color);
console.log("Price:", User.price)