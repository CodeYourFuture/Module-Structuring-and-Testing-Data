//I have used AI help for this problem i cant write this kind of function at this time but i understand how it is working 
//i will have a look for details with a mentor . 
//i included my own comment on how it is working
function passwordValidator(password, previousPasswords = []) { // here we have a fun with an input password and arrays of previous passwords
    // Here i checked for its length to be greater than 5 ,if it is less than 5 it return false
    if (password.length < 5) return false;
// i defined this cases to use them in my condition latter
    let hasUpperCase = false; //initially we set all the conditions to be false and later we will check if they are true 
    let hasLowerCase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
    const specialChars = "!#$%.*&"; //here i define the special characters.
 
    // Loop through each character in the password
    for (let char of password) {      //for this loop for each char in the string password 
        if (char >= "A" && char <= "Z") hasUpperCase = true;   //if the char is between all upper cases update the value of hasUpperCase to true which means the value is accepted.
        else if (char >= "a" && char <= "z") hasLowerCase = true;
        else if (char >= "0" && char <= "9") hasNumber = true;
        else if (specialChars.includes(char)) hasSpecialChar = true; //if specialChars includes the char update hasSpecialChar to true
    }

    // I check if all conditions are met i.e. if they are not met just return false.
    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
        return false;
    }

    // if the array of previous password contain our new password return false
    if (previousPasswords.includes(password)) {
        return false;
    }

    return true; // Password is valid
}

module.exports = passwordValidator;
