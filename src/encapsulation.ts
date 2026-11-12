class Employee {
    constructor(public name: string, private _baseSallary: number) { };

    get baseSallary(): number {
        return this._baseSallary;
    }

    set baseSallary(newSallay: number) {
        this._baseSallary = newSallay;
    }

    get BonusSallary(): number {
        return this._baseSallary + 90000;

    }


}


const employee = new Employee("Fahim", 50000);

console.log(employee.name + " " + employee.baseSallary + " " + employee.BonusSallary)