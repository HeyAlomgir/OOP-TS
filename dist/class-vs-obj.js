class Employee {
    name;
    baseSallary;
    constructor(name, baseSallary) {
        this.name = name;
        this.baseSallary = baseSallary;
    }
}
const Employee1 = new Employee("Alomgir", 20000);
const Employee2 = new Employee("Fahim", 30000);
console.log(Employee1.name + " " + Employee1.baseSallary);
console.log(Employee2.name + " " + Employee2.baseSallary);
export {};
