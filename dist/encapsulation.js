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
    set baseSallary(newSallay) {
        this._baseSallary = newSallay;
    }
}
const employee = new Employee("Fahim", 50000);
employee.baseSallary = 3444;
console.log(employee.name + " " + employee.baseSallary);
export {};
