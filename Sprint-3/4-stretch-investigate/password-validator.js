let previousPasswords = []

function passwordValidator(password,previousPasswords = []) {
    const hasMinLength = password.length >= 5 
    const hasUpperCase = /[A-Z]/.test(password) 
        const hasLowerCase = /[a-z]/.test(password) 
        const hasNumber = /\d/.test(password) 
        const hasSymbols = /[!#$%.*&]/.test(password)
        const isNotPreviousPassword = !previousPasswords.includes(password) 
        
        return hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSymbols && isNotPreviousPassword;
}

module.exports = passwordValidator;