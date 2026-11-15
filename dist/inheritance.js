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
    set baseSallary(newSallary) {
        if (newSallary < 0) {
            throw new Error("Sallry cannot be negative");
        }
        this._baseSallary = newSallary;
    }
    get bonousSallary() {
        return this._baseSallary + 5000;
    }
}
const employee = new Employee("Alomgir", 3000);
console.log(employee.name);
console.log(employee.baseSallary);
employee.baseSallary = 20000;
;
console.log(employee.baseSallary);
console.log(employee.bonousSallary);
export {};
