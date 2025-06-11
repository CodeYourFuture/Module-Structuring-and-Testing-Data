// Write a function that will calculate the area of a rectangle
//   given it's width and height

let width = 3;
let height = 4;

function calculateArea(width, height) {
  const area = width * height;

  console.log('Grand!'); // test statement to check if the function is called
    return area;
}
const result = calculateArea(4,5);
console.log(result); // Output: 12

// To execute multiple calculations, we can call the function with different arguments see below
// We can also store the result of the function in a variable


const output1 = calculateArea(5,5);
const output2 = calculateArea(7,23)

console.log(output1); // Output: 27.5
console.log(output2); // Output: 41.961
