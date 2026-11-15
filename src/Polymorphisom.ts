class Employee {
    constructor(
        public name: string,
        private _baseSallary: number,
    ) { }
    get baseSallary() {
        return this._baseSallary;
    }
}

const employee = new Employee("ALomgir", 34444);
console.log(employee.baseSallary)