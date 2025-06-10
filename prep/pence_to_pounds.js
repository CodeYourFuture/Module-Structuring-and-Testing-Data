const price = 2;

function calculatePound(price) {
    return `£${(price/100).toFixed(2)}`;
}

const result = calculatePound(price);
console.log(result);