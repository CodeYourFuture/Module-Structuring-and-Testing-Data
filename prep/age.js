// Write a function that takes a year as input and returns the age of a person born in that year.
function ageCalculator(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}


let yearOfBirth = 1998;
console.log(ageCalculator(yearOfBirth)); 


yearOfBirth = 2000;
console.log(ageCalculator(yearOfBirth));
