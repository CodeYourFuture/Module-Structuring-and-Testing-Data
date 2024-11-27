const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
  //Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
  //Math.floor(Math.random() * (100 - 1 + 1)) + 1
  //Math.floor(Math.random() * (100)) + 1
  //Math.floor(0.1812 * (100)) + 1
  //Math.floor(18.12) + 1
  //18 + 1
  //19=this could be change as the Math.random() function could returns any random value
// Try breaking down the expression and using documentation to explain what it means
  //Math.random()= returns a random value between 0 and 1
  //minimum and maximum variables are already assigned to the values 1 and 100 respectively
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
// root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/exercises# node random.js 
// 73
// root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/exercises# node random.js 
// 40
// root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/exercises# node random.js 
// 73
// root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/exercises# node random.js 
// 99
// root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/exercises# node random.js 
// 79
// root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/exercises# node random.js 
// 87
// root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/exercises# node random.js 
// 8
// root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/exercises# 
console.log(num)