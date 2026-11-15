class Employee {
    constructor(
        public name: string,
        private baseSallary: number
    ) { };
}
const employee = new Employee("Alomgir", 3000);

console.log(employee.name)