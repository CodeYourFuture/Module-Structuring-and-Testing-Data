const previousPasswords = ["Password123!", "helloWorld1#", "Test1234."];

function passwordValidator(password) {
    const hasMinLength = password.length >= 5;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!#$%.*&]/.test(password); // Only allow these specific symbols
    const isNotPrevious = !previousPasswords.includes(password);

    return hasMinLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isNotPrevious;
}
module.exports = passwordValidator;
// This function checks if the password is at least 5 characters long.
// If the password is shorter than 5 characters, it returns false; otherwise, it returns true.
// This is a basic validation to ensure that the password meets a minimum length requirement.
// You can expand this function to include more complex validation rules, such as checking for uppercase letters, numbers, or special characters.
// For example, you might want to add checks for:
// - At least one uppercase letter
// - At least one lowercase letter
// - At least one digit
// - At least one special character
// - No spaces or other invalid characters
//// Example of a more complex password validation function: