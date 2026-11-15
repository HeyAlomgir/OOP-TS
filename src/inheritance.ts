class Employee {
    constructor(
        public name: string,
        protected _baseSallary: number
    ) { };
    get baseSallary(): number {
        return this._baseSallary
    }
    set baseSallary(newSallary: number) {
        if (newSallary < 0) {
            throw new Error("Sallry cannot be negative")
        }
        this._baseSallary = newSallary;
    }
    get bonousSallary(): number {
        return this._baseSallary + 5000;
    }

    describe(): string {
        return `${this.name} earns ${this.baseSallary}`
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
    constructor(name: string,
        _baseSallary: number,
        public TimMemberCount: number) {
        super(name, _baseSallary)
    }
    DesMan(): string {
        return `${this.name}, ${this._baseSallary},${this.TimMemberCount}`
    }
}
const manager = new Manager("Alomgir", 30000, 20);
console.log("DesMam:", manager);