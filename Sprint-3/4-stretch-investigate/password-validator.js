// function passwordValidator(password) {
//     return password.length < 5 ? false : true
// }

const passwordRequirements = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{5,20}$/;

let passwordsUsed = [];

function passwordValidator(password) {
    if(passwordRequirements.test(password) && !passwordsUsed.includes(password)){
        if (!passwordsUsed.includes(password)) {
            passwordsUsed.push(password);
        }
        return true
    }

    if (!passwordRequirements.test(password) || passwordsUsed.includes(password) ) {
        return false
    }

}



module.exports = passwordValidator;