//initialises a string variable with the value "399p"
const penceString = "399p";

//creates a substring of penceString to remove the trailing or the last character p value and
//assign the new value to "penceStringWithoutTrailingP"
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);  //it will save 399 in penceStringWithoutTrailingP

/* The method padStart is used when we want our string to have at least some length; 
 in this case if the length of our string is less than 3, we are going to put "0"
 in extra spaces
 The reason for padding the pence number string to 3 size is because in the next step
 we will create a substring by removing the last two values 
 and that will give us the pounds number value and the remaining characters will be the
 pence value. */
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //it will not change our string because 399 already has three characters

/* Here we are trying to get the pounds value out of the total pence value 
   Therefore we are creating a substring of paddedPenceNumberString to 
   create a string that removes the last two numbers from paddedPenceNumberString
   which are pence numbers. */
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);


/* Here, we are doing two things:
   1. we are creating a substring of paddedPenceNumberString
   to get the pence numbers only by returning the last two numbers.
   2. We are using padEnd method to pad our result to two character values
      and adding 0 at the end if the length of our substring is less than 2
      
   Note: However, our paddedPenceNumberString length is always going to be at least 3
      and the below substring is going to return us the last two characters which is pence value
      So, I don't understand the use padEnd and in fact, I tried commenting it and tested the code
      with different penceString values and the results are same.  */
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  
// in the below code we are printing the value starting with £ symbol of pounds and pence separated by "."   
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
