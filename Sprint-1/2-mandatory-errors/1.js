// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

/*This code is not going to run as age is defined by const and the value of age
 would have to stay as 33. To add 1 to the age we can use let instead of const. 
 let allowes changes to variables , but const only keeps values constant.*/

 let age = 33;
 age = age + 1;

 console.log(age);