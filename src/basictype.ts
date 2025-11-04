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

// Destructure

interface Person {
  name: string;
  age: number;
}

function getPerson(person: Person): string {
  return `My name is ${person.name} and I am ${person.age} years old`;
}

getPerson({ name: "Razu", age: 25 });

let person2: Person = {
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

const {
  name,
  village: { address: homeAddress }, // alias
  myage,
  hobbies,
} = info;

const arrofFields: string[] = ["name", "village", "myage", "hobbies"];

const [, , yage, ...reset] = arrofFields;

// 1.9  type alias
type Student = {
  name: string;
  age: number;
  contact: string;
  hobbies?: string[];
};

const student1: Student = {
  name: "razu",
  age: 25,
  contact: "9876543210",
  hobbies: ["reading", "coding"],
};

const student2: Student = {
  name: "Sakib",
  age: 26,
  contact: "9876543233",
};

// alias type in function

type AddNew = (num1: number, num2: number) => number;

const addNew: AddNew = (num1: number, num2: number): number => num1 + num2;

// 1.10 Union  types

type FrontendDeveloper = "Frontend" | "Fullstack";

const newDeveloper: FrontendDeveloper = "Frontend";

type Teacher = {
  name: string;
  age: number;
  bloodGroup: "A" | "B" | "AB" | "O";
  gender: "Male" | "Female";
};

const teacher1: Teacher = {
  name: "Razu",
  age: 25,
  bloodGroup: "A",
  gender: "Male",
};

const teacher2: Teacher = {
  name: "Sathiya",
  age: 20,
  bloodGroup: "O",
  gender: "Female",
};

// and Intersection types
type Person4 = { name: string };
type Employee = { salary: number };

type Staff = Person4 & Employee;

let emp: Staff = {
  name: "Razu",
  salary: 50000,
};

// 1.11 Ternary Operator (? :)
// condition ? expressionIfTrue : expressionIfFalse;

const isAdmin1: boolean = true;
const isAdmin2: boolean = false;

const isAdmin3: boolean = isAdmin1 ? true : false;

const isAdmin4: boolean = isAdmin2 ? true : false;

let age1: number = 18;
let message = age1 >= 18 ? "You are adult" : "You are minor";
console.log(message); // "You are adult"

{
  // 1.12 Nullish coalescing operator (??)
  let name: string | null = "Razu";

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

// Nullish Coalescing Operator (??)
// Used to provide a default value when a variable is null or undefined,
// but not for falsey values like 0, "", or false.

//1.12 Never,unknown and nullable type

const throwError = (msg: string): never => {
  throw new Error(msg);
};

console.log(throwError("Error"));

// unknown
let userInput: unknown;

userInput = "Hello";
userInput = 123;

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // ✅ Safe to use
}

// userInput.toFixed(); // ❌ Error (TypeScript doesn't know it's a number)
