function passwordValidator(password){

    if (password.length < 5) return false; 

    if (!/[A-Z]/.test(password)) return false; 

    if (!/[a-z]/.test(password)) return false;

    if (!/[0-9]/.test(password)) return false;

    if (!/[!#\$%\.\*&]/.test(password)) return false;

    return true;
}

console.log(passwordValidator("Abc1"));

console.log(passwordValidator("12345"));

console.log(passwordValidator("abcde1"));

module.exports = passwordValidator;