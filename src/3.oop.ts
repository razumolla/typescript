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
  // oop - inheritence
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
