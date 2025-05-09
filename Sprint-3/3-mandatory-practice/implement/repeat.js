function repeat(str,count) {
  

  //if count is > 0 then repeat as count 
  if (count>0)
    {
        const repeating = str.repeat(count);
        return repeating;
    }

// if count is equal to zero return empty string 
else if (count == 0)
    {
        return " ";
    }
// if count is less then zero show error message
 else if (count<0)
 {
    throw new Error("Negative count are not valid");
 }
  

}

module.exports = repeat;

case1 = repeat("sarawone",3)
console.log(`${case1}`);

case1 = repeat("sarawone",1)
console.log(`${case1}`);

case1 = repeat("sarawone",0)
console.log(`${case1}`);

//case1 = repeat("sarawone",-1)
//console.log(`${case1}`);

