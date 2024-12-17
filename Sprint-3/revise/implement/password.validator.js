function passwordValidator(password, previousPasswords) { //Requires 2 inputs, previousPasswords to be declared in an array for testing
    if(password.length < 5) { //Handles that the password is long enough
        return false; 
    }

    if(!/[A-Z]/.test(password)) { //handles for when the password does not contain an uppercase letter between A-Z
        return false;
    }

    if(!/[a-z]/.test(password)) { //handles for when the password does not contain a lowercase letter between a-z
        return false;
    }

    if(!/[0-9]/.test(password)) { //handles for when the password does not contain a number between 0-9
        return false;
    }

    if(!/[!#$%.*&]/.test(password)) { //handles for when the password does not contain a defined special character
        return false;
    }

    if(previousPasswords.includes(password)) {
        return false;
    }
    return true; //Handles for when all conditions are met

}
module.exports = {passwordValidator};