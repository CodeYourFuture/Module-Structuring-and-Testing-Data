function passwordValidator(password) {
    if (  password.length < 5 ) {
        return false;
    } else if (password.search[/A-Z/i] < 0){
        return false;
    } else if (password.search[/a-z/i] < 0){
        return false;
    } else if (password.search[/0-9/] < 0 ){
        return false;
    } else if (password.search[/!@#$%&*_?-/] < 0 ){
        return false;
    } else {
        return true;
    }
}

module.exports = passwordValidator;