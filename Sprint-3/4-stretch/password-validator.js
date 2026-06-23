function passwordValidator(password) {
    if (password.length < 5) {
        return false;
    } else if (!/[A-Z]/.test(password)) {
        return false;
    } else if (!/[a-z]/.test(password)) {
        return false;
    } else if (!/[0-9]/.test(password)) {
        return false;
    } else if (!/[!#$%.*&]/.test(password)) {
        return false;
    } else {
        return true;
    }   
    

}


module.exports = passwordValidator;

// ("!", "#", "$", "%", ".", "*", "&")