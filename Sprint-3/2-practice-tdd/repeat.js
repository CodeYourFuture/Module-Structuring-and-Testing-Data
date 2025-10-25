function repeat(word,time){

  if (time <0){

    throw new Error("Invalid count");

  }

  let result ="";

  for (let i = 0;i<time; i++){

    result =result + word;
  }

  return result;
}

console.log(repeat("hello",3));

console.log(repeat("hi",1)); 


module.exports = repeat;
