class Employee {
    constructor(
        public name: string,
        private _baseSallary: number
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

console.log(employee.name);
console.log(employee.baseSallary)
employee.baseSallary = 20000;;
console.log(employee.baseSallary)
console.log(employee.bonousSallary)
console.log("Describe method : ", employee.describe());