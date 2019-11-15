var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getList = function () {
        return this.name + ' ' + this.age;
    };
    return User;
}());
var user = new User('dat', 20);
console.log(user.getList());
