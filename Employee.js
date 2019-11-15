"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee() {
        this.employee = [];
    }
    Employee.prototype.add = function (employee) {
        this.employee.push(employee);
    };
    Employee.prototype.getList = function () {
        return this.employee;
    };
    Employee.prototype.showItem = function () {
        var name = [];
        for (var _i = 0, _a = this.employee; _i < _a.length; _i++) {
            var employee_1 = _a[_i];
            name.push(employee_1.name);
        }
        return name;
    };
    return Employee;
}());
var firstEmployee = {
    name: 'dat',
    age: 20
};
var secondEmployee = {
    name: 'thanh',
    age: 18
};
var employee = new Employee();
employee.add(firstEmployee);
employee.add(secondEmployee);
console.log(employee.getList());
console.log(employee.showItem()[0]);
