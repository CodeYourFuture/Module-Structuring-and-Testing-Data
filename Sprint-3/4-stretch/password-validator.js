function passwordValidator(password) {
    return password.length < 5 ? false : true
}


module.exports = passwordValidator;
 function passwordValidator(password) {
    if (password.length < 5){
         return false;
    } else if (password.length >= 5 ){
        return true;
    }
}

module.exports = passwordValidator;