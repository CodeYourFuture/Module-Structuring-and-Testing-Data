// Below are the steps for how BMI is calculated
// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.
// For example, if you weigh 70kg and are 1.73m tall, you work out your BMI by:
// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

function calculateBMI(weight, height) {
  // 1. Calculate height squared (الطول مضروب في نفسه)
  const heightSquared = height * height;

  // 2. Divide weight by height squared (الوزن تقسيم الطول المربع)
  const bmi = weight / heightSquared;

  // 3. Return the result to 1 decimal place (إرجاع النتيجة بخانة عشرية واحدة)
  return bmi.toFixed(1);
}

// === Let's test the function to see if it works! ===
console.log(`The BMI for 70kg and 1.73m is: ${calculateBMI(70, 1.73)}`);
// It should print: 23.4
