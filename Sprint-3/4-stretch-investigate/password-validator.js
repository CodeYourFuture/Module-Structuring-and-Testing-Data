
let passwords=[];
function passwordValidator(password) {
    if (password.length < 5) {
        return 'Your password should be at least 5 characters';
    }
    else if (!/[A-Z]/.test(password)) {
        return 'Your password should have at least one uppercase letter';
    } 
    else if(!/[a-z]/.test(password)){
        return 'Your password should have at least one lowercase letter';
    }
    else if(!/[0-9]/.test(password)){
        return 'Your password should have at least one number';
    }
    else if(!/[!@#$%^&*]/.test(password)){
        return 'Your password should have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")';
    }
    else {
        
        if (passwords.includes(password)) {
            return 'Your password has already been used';
        } 
        else {
            return 'Your password is updated successfully';
            passwords.push(password);
        }
    }
}



module.exports = passwordValidator;
