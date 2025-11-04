"use strict";
// basic type :primitive
Object.defineProperty(exports, "__esModule", { value: true });
// sting
let a = "raju";
// number
let age = 23;
// boolean
let isAdmin = true;
// undefined
let as = undefined;
// null
let y = null;
const person0 = {
    name: "razu",
    age: 25,
};
// object
let person = {
    name: "Razu",
    age: 22,
};
// array
let numbers = [1, 2, 4];
numbers.push(5);
let names = ["razu", "sojib", "molla"];
names.push("saju");
// Tuple
let user = ["razu", 23, true];
let mister = ["sakib", 30];
mister[1] = 23;
// function
function greet(name) {
    console.log("Hello, " + name);
}
function great1(name) {
    console.log(name, +"Molla");
}
// class
class Car {
    brand;
    year;
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
}
let myCar = new Car("Toyota", 2024);
let item1 = {
    id: 1,
    name: "Laptop",
    price: 800,
};
// enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
let adminRole = Role.User;
// Date
let today = new Date();
let item = {
    id: 1,
    name: "Laptop",
    price: 800,
};
let newUser = {
    company: "JoulesLabs",
    parent: "Baba",
    name: "Razu Molla",
    age: 21,
    isMarried: false,
};
// 1.6 Fnction = normal, arrow
function addSum(a, b) {
    return a + b;
}
addSum(2, 3);
const addData = (num1, num2) => num1 + num2;
// object -> funciotn = method
const poorUser = {
    name: "razu",
    balance: 25,
    addBanance(balance) {
        // return this.balance + balance;
        return `My new balance is ${this.balance + balance}`;
    },
};
const arr = [1, 2, 3, 4];
const newArr = arr.map((elem) => elem * elem);
// 1.7 spread, rest, destructure
const boost1 = ["razu", "sakib", "rased"];
const boost2 = ["razu", "sakib", "rased"];
boost1.push(...boost2); //spread
const mentors1 = {
    bangla: "raz",
    english: "raz",
};
const mentors2 = {
    math: "raz",
    science: "raz",
};
const mentorList = {
    ...mentors1,
    ...mentors2,
};
function getPerson(person) {
    return `My name is ${person.name} and I am ${person.age} years old`;
}
getPerson({ name: "Razu", age: 25 });
let person2 = {
    name: "Razu",
    age: 25,
};
getPerson(person);
person = { name: "Razu", age: 25 };
getPerson(person);
const info = {
    name: "razu",
    village: {
        name: "kandakul",
        address: "Boalmari",
    },
    myage: 25,
    hobbies: ["reading", "coding"],
};
const { name, village: { address: homeAddress }, // alias
myage, hobbies, } = info;
const arrofFields = ["name", "village", "myage", "hobbies"];
const [, , yage, ...reset] = arrofFields;
const student1 = {
    name: "razu",
    age: 25,
    contact: "9876543210",
    hobbies: ["reading", "coding"],
};
const student2 = {
    name: "Sakib",
    age: 26,
    contact: "9876543233",
};
const addNew = (num1, num2) => num1 + num2;
const newDeveloper = "Frontend";
const teacher1 = {
    name: "Razu",
    age: 25,
    bloodGroup: "A",
    gender: "Male",
};
const teacher2 = {
    name: "Sathiya",
    age: 20,
    bloodGroup: "O",
    gender: "Female",
};
let emp = {
    name: "Razu",
    salary: 50000,
};
// 1.11 Ternary Operator (? :)
// condition ? expressionIfTrue : expressionIfFalse;
const isAdmin1 = true;
const isAdmin2 = false;
const isAdmin3 = isAdmin1 ? true : false;
const isAdmin4 = isAdmin2 ? true : false;
let age1 = 18;
let message = age1 >= 18 ? "You are adult" : "You are minor";
console.log(message); // "You are adult"
{
    // 1.12 Nullish coalescing operator (??)
    let name = "Razu";
    name = name ?? "Molla";
    name = name ?? "Sojib";
    let user = {
        name: "Razu",
        address: {
            city: "Dhaka",
        },
        contact: {
            phone: "9876543210",
        },
    };
    console.log(user?.address?.city); // "Dhaka"
    console.log(user?.contact?.phone); // undefined (no error!)
}
//# sourceMappingURL=basictype.js.map