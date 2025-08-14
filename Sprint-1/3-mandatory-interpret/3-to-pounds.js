const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
 /* 1. const penceString = "399p": initialises a string variable with the value "399p"

2.const penceString = "399p";: 
This line initializes a constant variable named penceString and assigns it the string value "399p". This string represents a price in pence.  The const keyword means the variable's value cannot be reassigned later in the program.
const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);:
This line creates a new constant variable called penceStringWithoutTrailingP. It uses the substring() method to extract a portion of the penceString.  penceString.length gets the total length of the string (5 in this case). Subtracting 1 gives us 4. substring(0, 4) extracts the characters from index 0 up to (but not including) index 4, effectively removing the last character "p". The result, "399", is stored in penceStringWithoutTrailingP.  The rationale is to isolate the numerical part of the pence value.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");:

This line creates another constant, paddedPenceNumberString. It uses the padStart() method to 
pad the penceStringWithoutTrailingP with leading zeros until it reaches a length of 3. If the
string is already 3 or more characters long, no padding is added. In our example, "399" is 
already 3 digits, so no padding occurs. The result, "399", is stored in paddedPenceNumberString.
The rationale for padding is to ensure that even single-digit or double-digit pence values are 
formatted correctly when converted to pounds and pence (e.g., "7p" becomes "007").

const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);:
This line extracts the pounds portion of the price. paddedPenceNumberString.length - 2 calculates the index 
two characters from the end.  substring(0, paddedPenceNumberString.length - 2) extracts the 
characters from the beginning up to that index.
In our example, paddedPenceNumberString.length is 3,
so paddedPenceNumberString.length - 2 is 1. substring(0, 1) extracts the first character, "3".
The result, "3", is assigned to the pounds constant. The rationale is to separate the pounds from
the pence.

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");:
This line extracts the pence portion. paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) extracts the last two characters of the padded number string ("99" in our example). The padEnd(2, "0") method ensures that the pence value has at least two digits, adding trailing zeros if necessary.  In our case, "99" already has two digits, so no padding is added. The result, "99", is assigned to the pence constant. The rationale is to isolate the pence value.
console.log(£pounds.{pence});: This line uses a template literal (backticks) to create a string that combines the pounds and pence values with a pound symbol and a decimal point.  It then uses console.log() to print this formatted string to the console. In our example, it will print "£3.99". This is the final formatted price in pounds and pence.

 */