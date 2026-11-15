class Employee {
    constructor(
        public name: string,
        private _baseSallary: number,
    ) { }
    get baseSallary() {
        return this._baseSallary;
    }
    get bonousSallary(): number {
        return this._baseSallary + 5000;
    }
    set baseSallary(newSallary: number) {
        if (newSallary < 0) {
            throw new Error("Sallry cannot be negative")


        }
        this._baseSallary = newSallary;
    }


}

const employee = new Employee("ALomgir", 34444);
console.log(employee.baseSallary)
employee.baseSallary = 50000;
console.log(employee.baseSallary)
console.log(employee.bonousSallary)