import {IEmployee} from "./IEmployee";

class Employee {
    public employee: IEmployee[] = [];

    add(employee: IEmployee) {
        this.employee.push(employee)
    }

    getList(): IEmployee[] {
        return this.employee;
    }

    showItem(): string[] {
        let name :string[]=[];
        for (let employee of this.employee) {
            name.push(employee.name);
        }
        return name
        ;
    }
}

let firstEmployee: IEmployee = {
    name: 'dat',
    age: 20,
};

let secondEmployee: IEmployee = {
    name: 'thanh',
    age: 18,
};


let employee = new Employee();
employee.add(firstEmployee);
employee.add(secondEmployee);
console.log(employee.getList());
console.log(employee.showItem()[0]);