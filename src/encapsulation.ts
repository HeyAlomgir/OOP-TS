class Employee {
    constructor(public name: string, private _baseSallary: number) { };

    get baseSallary() {
        return this._baseSallary;
    }

    set baseSallary(newSallay: number) {
        this._baseSallary = newSallay;
    }


}


const employee = new Employee("Fahim", 50000);
employee.baseSallary = 3444;
console.log(employee.name + " " + employee.baseSallary)