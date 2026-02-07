function calculateBMI(weight, height) {
  const bmi = parseFloat((weight / height ** 2).toFixed(1));

  return bmi;
}

const calculatedBMI = calculateBMI(70, 1.73);
const actualBMI = 23.4;

console.assert(
  calculatedBMI === actualBMI,
  `calculated BMI: ${calculatedBMI}, actual BMI: ${actualBMI}`
);
