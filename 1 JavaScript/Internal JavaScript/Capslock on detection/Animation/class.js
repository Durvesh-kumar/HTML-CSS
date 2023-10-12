class Person{
    constructor(uName, uAge){
        this.name = uName;
        this.age = uAge;
    }
    details(){
        console.log(`the age of ${this.name} is ${this.age} years`);
    }
}
let p = new Person("Durvesh kumar", 22);
p.details();