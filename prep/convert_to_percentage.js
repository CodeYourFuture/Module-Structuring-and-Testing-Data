const decimalNumber = 0.5;

function convertToPercentage(){
    const percentage = `${decimalNumber * 100}%`;
    return percentage;
} 

const result = convertToPercentage(0.5);
console.log(result);