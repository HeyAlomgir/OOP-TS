class Employee {
    constructor(
        public name: string,
        private _baseSallary: number
    ) { };
    get baseSallary(): number {
        return this._baseSallary
    }
}
const employee = new Employee("Alomgir", 3000);

console.log(employee.name);
console.log(employee.baseSallary)