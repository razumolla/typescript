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

  //
}
