// basic type :primitive

// sting
let a: string = "raju";
// number
let age: number = 23;
// boolean
let isAdmin: boolean = true;
// undefined
let as: undefined = undefined;
// null
let y: null = null;
// any

// not primitive

// Array
interface Person {
  name: string;
  age: number;
}

const person0: Person = {
  name: "razu",
  age: 25,
};

// object
let person: { name: string; age: number } = {
  name: "Razu",
  age: 22,
};

// array
let numbers: number[] = [1, 2, 4];
numbers.push(5);

let names: string[] = ["razu", "sojib", "molla"];
names.push("saju");

// Tuple
let user: [string, number, boolean] = ["razu", 23, true];
let mister: [string, number] = ["sakib", 30];
mister[1] = 23;

// function
function greet(name: string): void {
  console.log("Hello, " + name);
}

function great1(name: string): void {
  console.log(name, +"Molla");
}

// class
class Car {
  constructor(public brand: string, public year: number) {}
}

let myCar = new Car("Toyota", 2024);

// interface
interface Product {
  id: number;
  name: string;
  price: number;
}

let item1: Product = {
  id: 1,
  name: "Laptop",
  price: 800,
};

// enum
enum Role {
  Admin,
  User,
  Guest,
}

let userRole: Role = Role.Admin;
let adminRole: Role = Role.User;

// Date
let today: Date = new Date();

// object, optional, Literal types

// interface
interface Product {
  id: number;
  name: string;
  price: number;
}

let item: Product = {
  id: 1,
  name: "Laptop",
  price: 800,
};

//  Object with Type Alias
type User = {
  readonly company: string;
  parent: "Baba"; // literal type
  name: string;
  age: number;
  address?: string | undefined; // optional type
  isMarried: boolean;
};

let newUser: User = {
  company: "JoulesLabs",
  parent: "Baba",
  name: "Razu Molla",
  age: 21,
  isMarried: false,
};

// 1.6 Fnction = normal, arrow

function addSum(a: number, b: number): number {
  return a + b;
}

addSum(2, 3);

const addData = (num1: number, num2: number): number => num1 + num2;

// object -> funciotn = method

const poorUser = {
  name: "razu",
  balance: 25,
  addBanance(balance: number): string {
    // return this.balance + balance;
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 4];

const newArr: number[] = arr.map((elem: number): number => elem * elem);

// 1.7 spread, rest, destructure

const boost1: string[] = ["razu", "sakib", "rased"];
const boost2: string[] = ["razu", "sakib", "rased"];

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

// now rest
