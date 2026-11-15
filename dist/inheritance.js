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
    describe() {
        return `${this.name} earns ${this.baseSallary}`;
    }
}
const employee = new Employee("Alomgir", 3000);
// console.log(employee.name);
// console.log(employee.baseSallary)
// employee.baseSallary = 20000;;
// console.log(employee.baseSallary)
// console.log(employee.bonousSallary)
// console.log("Describe method : ", employee.describe());
class Manager extends Employee {
    TimMemberCount;
    constructor(name, _baseSallary, TimMemberCount) {
        super(name, _baseSallary);
        this.TimMemberCount = TimMemberCount;
    }
    DesMan() {
        return `${this.name}, ${this.baseSallary},${this.TimMemberCount}`;
    }
}
const manager = new Manager("Alomgir", 30000, 20);
console.log("DesMna:", manager);
export {};
