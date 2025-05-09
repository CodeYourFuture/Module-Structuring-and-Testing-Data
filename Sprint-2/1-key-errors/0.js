// Predict and explain first...
//  =============> capitalise the first letter and take out as it from second till end .

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


function capitalise(str) {
  let name = `${str[0].toUpperCase()}${str.slice(1)}`;
  return name;
}

const Fname = capitalise("sarawone");
console.log(`The result is ${Fname}`);

// =============> write your explanation here
   // Ans: the error is cause of assigning the same variable in again in the function  (str)
// =============> 
// function capitalise(str) {
  //let name = `${str[0].toUpperCase()}${str.slice(1)}`;
  // return name;
//}
