// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;
// This code will throw an error because `age` is declared as a constant 
// using `const`, which means its value cannot be reassigned.
// To fix this, we can declare `age` using `let` instead of `const`, which allows reassignment.
let age = 33;
age = age + 1;
console.log(age);
// Now the code will run without errors, and it will output 34 to the console.
//or we can us this to create an age variable and then reassign the value by 1

// The user object itself is locked, but its contents are flexible
const user = {
    age: 33
};

user.age = user.age + 1; 

console.log(user.age); // Outputs: 34