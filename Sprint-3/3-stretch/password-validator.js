// function isLongEnough(password) {
//     return password.length >= 5; 
// }
// function isUpperCase(password) {
//     return /[A-Z]/.test(password);
// }

// function isLowerCase(password) {
//     return /[a-z]/.test(password);
// }

// function hasNumber(password) {
//     return /[0-9]/.test(password);
// }

// function hasSpecialChar(password) {
//     return /[!#$%.*&]/.test(password);
// } 
// function passwordValidator(password) {
    
//     if (isLongEnough(password) && isUpperCase(password) && isLowerCase(password) && hasNumber(password) && hasSpecialChar(password)) 
//         return true 
//     else 
//         return false; 
// }

/////////////////////////////////////////////////////////////////////

function passwordValidator(password) {
  const isLongEnough = password.length >= 5;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!#$%.*&]/.test(password);

  return isLongEnough && hasUpper && hasLower && hasNumber && hasSpecial;
}

console.log(passwordValidator("Password123!")); 

module.exports = passwordValidator;