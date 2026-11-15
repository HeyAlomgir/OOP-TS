class Employee {
    name;
    _baseSallary;
    constructor(name, _baseSallary) {
        this.name = name;
        this._baseSallary = _baseSallary;
    }
    get baseSallary() {
        return this._baseSallary;
    }
}
const employee = new Employee("ALomgir", 34444);
console.log(employee.baseSallary);
employee.baseSallary = 50000;
console.log(employee.baseSallary);
export {};
