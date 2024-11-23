
function isValidPassword(password, previousPasswords) {
    // 1. Check length
    if (password.length < 5) {
        return false;
    }
    
    // 2. Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }

    // 3. Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }

    // 4. Check for at least one number
    if (!/[0-9]/.test(password)) {
        return false;
    }

    // 5. Check for at least one special character
    if (!/[!#$%.*&]/.test(password)) {
        return false;
    }

    // 6. Check if the password is not in the list of previous passwords
    if (previousPasswords.includes(password)) {
        return false;
    }

    return true;
}

// Sample list of previous passwords
const previousPasswords = ["password123", "abc123", "welcome1"];