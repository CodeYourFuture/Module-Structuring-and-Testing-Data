/* The datatype of age is a constant whose value cannot be modify after its declaration line.
   Therefore line 7 in this code snippet will always generate error as its attempting to modify the value of a constant variable */


   // trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;
