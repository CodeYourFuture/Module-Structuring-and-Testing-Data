function passwordValidator(password) {
    return password.length < 5 ? false : true
}


module.exports = passwordValidator;

console.log(passwordValidator("1234"));   // Output: false (too short)
console.log(passwordValidator("12345"));  // Output: true  (valid)
console.log(passwordValidator("abcdef")); // Output: true  (valid)
