class Person{
    //...Feild
    // Constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // Method
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    setName(name){
        this.name = name;
    }
}

const person1 = new Person("Alice", 30);
console.log(person1.name);
const person2 = new Person("Aliceeeeeee", 31);
person1.setName("Bob");
console.log(person1.name);