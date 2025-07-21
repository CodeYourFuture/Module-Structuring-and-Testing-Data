// Define a function that converts kilograms to pounds
function toPounds(kg) {
  const pounds = kg * 2.20462;
  return Number(pounds.toFixed(2)); // return as number, not string
}

module.exports = toPounds;
