const num= 0.7
const percent= `${num*100 }%`

const height = 10
const width = 30

const result = `the area is ${height*width} while the perimeter is ${height+height+width+width}`

console.log(percent)

console.log (result)

function convertToPercentage(decimalNumber) {
  // now decimalNumber is a parameter of convertToPercentage
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const output1 = convertToPercentage(0.3);
const output2 = convertToPercentage(5);

console.log(output1)
console.log(output2)