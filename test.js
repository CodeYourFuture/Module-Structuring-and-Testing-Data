// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:





function CalculateBMI (weight, height){
  const heightMeters = height/100;// coverted into meters
  const bmi = weight/(heightMeters ** 2); 
  return parseFloat(bmi.toFixed(1));// using the parseFloat to allow to return the value in numerical and .toFixed allows to round the value to specified decimal number
  }
  

  const DoBMI = CalculateBMI (60, 170);
  console.log (DoBMI);
  console.log (typeof DoBMI)

  