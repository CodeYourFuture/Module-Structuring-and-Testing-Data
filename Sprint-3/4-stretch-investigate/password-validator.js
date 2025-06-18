function passwordValidator(password) {

    previousPasswords = ["Be&n5","Be&n56969"];
    if (previousPasswords.includes(password)){throw new Error("You can't reuse an old password")}

    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%.*&]).{5,}$/.test(password);

    /* || REGEXP BREAKDOWN:

    /^              start of string

    .               matches any single character (except newline)

    .*              any single character, occuring 0 or more times

    (?=.*[a-z])     lookahead for anything (.*) followed by at least one lowercase letter

    (?=.*[A-Z])     as above but for uppercase letters

    (?=.*[!#$%.*&]) as above but for specific special characters

    .{5,}           match any character (except newline) that occurs 5 or more times

    $/ end of string

    */
}


module.exports = passwordValidator;