function repeatStr(fullString,repeatCount) {
 if( repeatCount < 0){
  throw new Error("repeatCount cannot be negative")
 };

 switch (true){
  case repeatCount === 0 : return "";
  default: return fullString.repeat(repeatCount) ;
 };
};

module.exports = repeatStr;

function assertTest(testInput,testOutput){
  console.assert(
    testInput === testOutput,
    `Expect ${testOutput} instead of ${testInput}`
  )
}

assertTest(repeatStr("left",3),"leftleftleft")
assertTest(repeatStr("learn",1),"learn")
assertTest(repeatStr("zero",0),"")
assertTest(repeatStr("negative",-1),"repeatCount cannot be negative")