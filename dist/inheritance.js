class Employee {
    name;
    _baseSallary;
    constructor(name, _baseSallary) {
        this.name = name;
        this._baseSallary = _baseSallary;
    }
    ;
    get baseSallary() {
        return this._baseSallary;
    }
}
const employee = new Employee("Alomgir", 3000);
console.log(employee.name);
console.log(employee.baseSallary);
export {};
