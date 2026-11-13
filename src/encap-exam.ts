class Shorom {
    constructor(
        public brand: string,
        public color: string,
        public price: number,
    ) { }
}

const User = new Shorom("Corola", "white", 2000000);
console.log(User)
console.log("Brand:", User.brand);
console.log("Color:", User.color);
console.log("Price:", User.price)