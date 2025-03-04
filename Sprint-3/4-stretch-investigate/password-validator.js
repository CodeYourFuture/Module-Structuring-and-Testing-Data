function passwordValidator(password) {

    if(password.length < 5) {
        return false;
    }


var lowerCaseLetter = /[a-z]/;
if (!lowerCaseLetter.test(password)) {
    return false;
}

return true;

}

var upperCaseLetter = /[A-Z]/;{
if (!upperCaseLetter.test(password)) {
    return false;
}

return true;
}

var passwordNumber = /[0-9]/; {
    if (!passwordNumber.test(password)) {
        return false;
    }
    return true;
}

module.exports = passwordValidator;