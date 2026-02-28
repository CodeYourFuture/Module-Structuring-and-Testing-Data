// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;
in this code we are trying to reassign the value of age variable by adding 1 to ageTrack. 
However, this will result in an error because the age variable is diclared as a constant using the const keyword. 
And in javascript, a variable decalred with const cannot be readdigned a new value afteer it has been intialised ,
 so if we want to reassign the vlaue we have to use let instead. 
 let age = 33;
 age = age +1;
 