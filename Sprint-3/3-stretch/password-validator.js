function passwordValidator(password) {
    //return password.length < 5 ? false : true
    const prevPasswords = ["Aa0Cc!ZzB#b91", "Aa0Cc!ZzB#b92","Aa0Cc!ZzB#b93"]
    let result = true
    if (password.length < 5){
        result = false
    }
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    if (!hasLowercase || !hasUppercase){
        result = false;
    }
    const hasNumber = /[0-9]/.test(password);
    if (!hasNumber){
        result = false
    }
    const hasSymbol =/[!#$%.*&]/.test(password);
    if (!hasSymbol){
        result = false
    }
    if (prevPasswords.includes(password)){
        result = false
    }
    return result
}


module.exports = passwordValidator;