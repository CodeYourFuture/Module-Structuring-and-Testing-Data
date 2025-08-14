//this array keeps track of passwords that are validated
let passwords=[];
function passwordValidator(password) {
    // password length is less than 5 characters
    if (password.length < 5) {
        return 'Your password should be at least 5 characters';
    }

    // password has no uppercase letter
    else if (!/[A-Z]/.test(password)) {
        return 'Your password should have at least one uppercase letter';
    } 

    // password has no lowercase letter
    else if(!/[a-z]/.test(password)){
        return 'Your password should have at least one lowercase letter';
    }

    // password has no number
    else if(!/[0-9]/.test(password)){
        return 'Your password should have at least one number';
    }

    // password has no non-alphanumeric symbols
    else if(!/[!@#$%^&*]/.test(password)){
        return 'Your password should have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")';
    }

    //if the password passes all above conditions
    else {
        // if the password is not found in the passwords array
        if (passwords.includes(password)) {
            return 'Your password has already been used';
        } 

        // if the password is found in the passwords array
        else {
            passwords.push(password);
            return 'Your password is updated successfully';
        }
    }
}



module.exports = passwordValidator;
