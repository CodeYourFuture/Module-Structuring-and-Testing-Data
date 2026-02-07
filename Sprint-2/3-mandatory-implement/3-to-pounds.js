function toPounds(str) {
  const price = (parseInt(str.replace("p", ""), 10) / 100).toFixed(2);

  return `£${price}`;
}

let returnedPrice = toPounds("399p");
let actualPrice = "£3.99";

console.assert(
  returnedPrice === actualPrice,
  `returned price: ${returnedPrice}, actual price: ${actualPrice}`
);

returnedPrice = toPounds("1p");
actualPrice = "£0.01";

console.assert(
  returnedPrice === actualPrice,
  `returned price: ${returnedPrice}, actual price: ${actualPrice}`
);

returnedPrice = toPounds("102342342342p");
actualPrice = "£1023423423.42";

console.assert(
  returnedPrice === actualPrice,
  `returned price: ${returnedPrice}, actual price: ${actualPrice}`
);
