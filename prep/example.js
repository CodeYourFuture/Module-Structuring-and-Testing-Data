// function decimalTopercent(num){
// 	let percent = num * 100;
// 	return percent
// }
// console.log(decimalTopercent(0.5) + "%");

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5);
const result1 = convertToPercentage(0.231);
console.log(result);
console.log(result1);
