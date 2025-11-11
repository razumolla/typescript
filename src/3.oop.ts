{
  //3.1 oop - class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // constructor(name: string, species: string, sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    // }

    // parameter properties-  constructor
    constructor(
      public name: string, // public = modifier , use korsi
      public species: string,
      public sound: string
    ) {}

    //method
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew"); // dog instance create korsi
  const cat = new Animal("Persian bhai", "cat", "meaw meaw");

  cat.makeSound();

  //
}

{
  // 3.2 oop - inheritence
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("Mr. student", 20, "Uganda");
  student1.getSleep(5);

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  const teacher = new Teacher("Mr. teacher", 40, "Uganda", "professor");
  teacher.takeClass(5);
  //
}

{
  // 3.3 oop - Type Guard
  // typeof  operator er  type guard
  type Alphaneumeric = string | number;

  const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      // type guard
      return param1 + param2;
    } else if (typeof param1 === "string" && typeof param2 === "string") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  console.log(add(10, 20));
  console.log(add("10", "20"));

  // in guard
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Mr. Normal Bhai",
  };
  const adminUser: AdminUser = {
    name: "Mr. Admin Bhai",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);
  //
}

{
  // 3.4 oop - Type Guard using instance of operator

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBurk() {
      console.log("I am making barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log("I am making sound mew mew");
    }
  }

  const dog = new Dog("German Shepard Bhai", "dog");
  const cat = new Cat("Cat bhai", "Cat");

  cat.makeMeaw();
  dog.makeBurk();

  const getAnimal0 = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBurk();
    } else if (animal instanceof Cat) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  // // smart way te handle korar jonno ,chaile amra function bebohar krte pari

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog; // instanceof operator
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  // animal -> dog/cat specify kora hocce -> then property call hocce =>  etai type guard or type narrawing
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBurk();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  getAnimal(dog);
  //
}

{
  //3.5= access modifiers: readonly, private, public ,protected
  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance; // protected access kora jai but provate can not access hare
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
  // goribManusherAccount.balance = 0;
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);

  //
}

{
  //3.6 getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //getter
    get balance() {
      return this._balance;
    }
    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 50);

  // goribManusherAccount.deposit = 0;
  // goribManusherAccount.addDeposit(20); // function call korte hsse
  goribManusherAccount.deposit = 50;
  // const myBalance = goribManusherAccount.getBalance(); // function call korte hsse

  const myBalance = goribManusherAccount.balance; // property er mto kore
  console.log(myBalance);

  //
}

{
  //3.7 static
  class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const instance1 = new Counter();
  console.log(Counter.increment()); // 1 -> different memory
  // 1 -> different memory

  // const instance2 = new Counter();
  console.log(Counter.increment()); // 1  --> different memory
  // 1  --> different memory

  // const instance3 = new Counter();
  console.log(Counter.increment());
  //
}

{
  //3.8 = polymorphisom

  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  // anoter way
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // pi* r* r
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // height * width
  class Reactangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Reactangle(10, 20);

  getShapeArea(shape3);

  //
}
