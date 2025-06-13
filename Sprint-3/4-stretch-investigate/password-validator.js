// This function validates a password based on several criteria:

function passwordValidator(password, previousPasswords = []) {
  //"return password.length < 5 ? false : true;" - Only this first return statement will ever run. As soon as a return is executed the function exits and the rest of the code is ignored
  if (typeof password !== "string") return false; //checks if the password is a not a string type (i.e. a value such as a number ,object, array , undefined, NaN, null, etc.), returns false if it is not a string.
  if (password.length > 100) return false; //checks that the password is not longer than 100 characters
  if (password.length < 5) return false; //checks that the password is at least a minimum of 5 characters long

  /* 
   The following checks if the password contains at specific characters using the regex and the .test() method. The .test method is used to check if a string matches a pattern. The "!" negates the result, so it returns false if no uppercase letter is found.
   */
  if (!/[A-Z]/.test(password)) return false; // checks if the password contains at least one uppercase letter using the regex /[A-Z]/, returns false if no uppercase letter is found.
  if (!/[a-z]/.test(password)) return false; // checks if the password contains at least one lowercase letter using the regex /[a-z]/, returns false if no loercase letter is found.
  if (!/[0-9]/.test(password)) return false; // checks if the password contains at least one number using the regex /[0-9]/, returns false if no number is found.
  if (!/[!#$%.&*]/.test(password)) return false; // checks if the password contains at least one non-alphanumeric character using the regex [!#$%.&*]/, returns false if no character is found.

  if (previousPasswords.includes(password)) return false; //checks that the password is not in the previous passwords array
  return true;
}

module.exports = passwordValidator;
