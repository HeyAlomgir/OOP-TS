class Employee {
    name;
    baseSallary;
    constructor(name, baseSallary) {
        this.name = name;
        this.baseSallary = baseSallary;
    }
    ;
}
const employee = new Employee("Alomgir", 3000);
console.log(employee.name);
export {};
