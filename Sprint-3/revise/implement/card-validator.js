function cardValidator (num) {
    //we use regular expression to check num is only digits
   // ^ asserts the start of the string
   //\d+ matches one or more digits
  //$ asserts the end of the string
  //test() method returns true if the string contains only digits and false otherwise
  //here we check if num only contains number and 16 digit long
    const regex = /^\d{16}$/
    if (!regex.test(num)) {
        return false
    }
 //here we check if the last digit is even
 //parseInt() is like making sure we treat this number as a real number, not just a character
   const lastDigit = parseInt(num.charAt(num.length-1));
    if (lastDigit % 2 !== 0) {
        return false;
    }
  // Check if there are at least two different digits
  //new Set() is like sorting box that removes duplicates
  //to spread out numbers:  "1112" :  1, 1, 1, 2
  //.size to count how many different digits we have
   const uniqueDigits = new Set(num.split('')).size;
     if (uniqueDigits < 2) {
        return false;
    }
    
    // Calculate the sum of all digits
    //num.split('') is like taking a number and breaking it into individual number piece 234, it breaks into 2, 3, and 4
    //reduce array method that transform an array into a single value 
    //parseInt(digit) makes sure each piece is treated as a whole number

    const digitSum = num.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    if (digitSum <= 16) {
        return false;
    }
    
    // If all conditions are met, return true
    return true;
}
   
    

   


console.log(cardValidator("6666666666661666"))
console.log(cardValidator("123476964458"))
console.log(cardValidator("9999777788880000"))




