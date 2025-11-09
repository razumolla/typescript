{
  //

  // type assertion
  let anything: any;

  anything = "Next Level Web Development";

  anything = 222;

  // (anything as number).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000");

  type customError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as customError).message);
  }

  //
}

{
  //interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User1 = {
    name: "Razu Molla",
    age: 100,
  };

  const user2: User2 = {
    name: "Razu Molla",
    age: 100,
  };

  type rollNumber = number;
  interface RollDice {
    roll: rollNumber;
  }

  const rollDice: RollDice = {
    roll: 100,
  };
  const roll: rollNumber = 100;

  // major difference  bwtween type and interface is that primitive type can not  be used in interface but  in type
  // interface Age = number; // ❌ Error: Interface cannot directly alias primitive types
  // type Age = number; // ✅ Works

  // But inside an interface, you can still use primitive types as property values:
  interface Person {
    name: string; // ✅ Primitive inside interface – valid
    age: number;
  }

  /* 
   Note: Type aliases can directly represent any type (primitive, union, tuple, etc.)
   while interfaces can only describe the structure of objects, functions, and classes.
   */
  type UserWithRole = User1 & {
    role: string;
  };

  // js --> object , array-> object function -> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];
  //      .....               0  1  2 --> number type

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;
  //
}

{
  // Generics type
  type GenericArray<T> = Array<T>;

  // const rollNumber: number[] = [1, 2, 3, 4, 5, 6];
  // const rollNumberG: Array<number> = [1, 2, 3, 4, 5, 6];
  const rollNumberG: GenericArray<number> = [1, 2, 3, 4, 5, 6];

  // const mentors: string[] = ["Razu Molla", "Razu Molla", "Razu Molla"];
  // const mentorsG: Array<string> = ["Razu Molla", "Razu Molla", "Razu Molla"];
  const mentorsG: GenericArray<string> = [
    "Razu Molla",
    "Razu Molla",
    "Razu Molla",
  ];

  // const boolArray: boolean[] = [true, false, true];
  // const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  // array --> object
  interface User {
    name: string;
    age: number;
  }

  // const user: User[] = [
  const user: GenericArray<User> = [
    {
      name: "Razu Molla",
      age: 100,
    },
    {
      name: "Jhankar Mahbub",
      age: 110,
    },
    {
      name: "Razu Molla",
      age: 100,
    },
  ];

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];

  // const Manus: [string, number, boolean] = ["Razu Molla", 100, true];
  const Manus: GenericTuple<string, number> = ["Razu Molla", 100];

  const UserWithRole: [number, { name: string; age: number }] = [
    1235,
    { name: "Razu Molla", age: 100 },
  ];
  interface UserNew {
    name: string;
    age: number;
    role: string;
  }
  const UserWithRole2: GenericTuple<number, UserNew> = [
    1235,
    { name: "Razu Molla", age: 100, role: "admin" },
  ];

  //
}

{
  // generic type with interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  //  -----
  type MiWatch = {
    brand: string;
    model: string;
    displaySize: string;
  };

  const poorDeveloper: Developer<MiWatch> = {
    name: "Razu Molla",
    computer: {
      brand: "HP",
      model: "Core i7",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "MI",
      model: "CX-50",
      displaySize: "6.5",
    },
  };
  // -----
  interface AppleWatch {
    brand: string;
    model: string;
    displaySize: string;
    heartTrack: boolean;
    batteryLife: number;
  }
  interface HondaBike {
    brand: string;
    model: string;
    color: string;
    cc: number;
  }

  const richDeveloper: Developer<AppleWatch, HondaBike> = {
    name: "Razu Molla",
    computer: {
      brand: "Apple",
      model: "M4",
      releaseYear: 2021,
    },
    smartWatch: {
      brand: "Apple",
      model: "iPhone",
      displaySize: "6.1",
      heartTrack: true,
      batteryLife: 100,
    },
    bike: {
      brand: "Honda",
      model: "CBR",
      color: "black",
      cc: 100,
    },
  };

  //
}

{
  // 2.5  Function with generic type

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrau = (param: number): number[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  });

  // function with tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //2.5 function with generic type
}

{
  //2.6 constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string } // ami extend kore constaraint kore dilam seta e constraints
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 44,
    name: "Mr. Z",
    email: "z@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr Saju",
    email: "saju@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 2154,
    name: "Mr Razu",
    email: "razu@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
