function passwordValidator(password, previousPasswords) {
    let passwordLength= password.length;
    if(passwordLength <5 ){// if length is less than 5
        return false;
    }if(!/[A-Z]/.test(password)){// if password doesn't contain capital letter
        return false;
    }if(!/[a-z]/.test(password)){// if password doesn't contain small letter
        return false;
    }if(!/[0-9]/.test(password)){//if password doesn't contain number
        return false;
    }if(!/[!#$%.*&]/.test(password)){// if password doesn't contain special character
        return false;
    }if(previousPasswords.includes(password)){// if password  contain previous password
        return false;
    }
    
    return true;
    
}


module.exports = passwordValidator;