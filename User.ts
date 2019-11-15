class User {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getList():string{
        return this.name + ' '+this.age;
    }

}

let user = new User('dat',20);
console.log(user.getList());
