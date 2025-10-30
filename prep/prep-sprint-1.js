// 1.Write a function that will calculate the area of a rectangle. The function should take two parameters: length and width. It should return the area of the rectangle.

function calculateArea(length, width) {
  const area = length * width;
  return area;
}

console.log(calculateArea(3, 4)); // Output: 12

// 2.Write a function that will capitalize the first letter in a given string.

function capitalizeFirstLetter(name) {
  const result = name[0].toUpperCase() + name.slice(1);
  return result;
}

console.log(capitalizeFirstLetter("mario")); // Output: "Mario"
