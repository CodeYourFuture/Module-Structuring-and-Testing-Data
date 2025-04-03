function passwordValidator(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    return regex.test(password);
}
console.log(passwordValidator('aA3!5'));
console.log(passwordValidator('aA3!'));
console.log(passwordValidator('11111'));
console.log(passwordValidator('aA345'));
console.log(passwordValidator('AA3!5'));
console.log(passwordValidator('aa3!5'));
module.exports = passwordValidator;