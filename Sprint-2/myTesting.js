let x ="399p"
console.log(x.substring(
    0,
    x.length - 1
  ))
 
  let y = x.substring(
    0,
    x.length - 1
  )
  const paddedPenceNumberString = y.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );
  console.log(paddedPenceNumberString)

  console.log(pounds)

  const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  console.log(pence)