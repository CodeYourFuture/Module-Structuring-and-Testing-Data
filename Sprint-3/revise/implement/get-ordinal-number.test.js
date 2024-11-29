// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(num){
    let numToString = num.toString();
    let lastNum = numToString.slice(-1);
    if (lastNum === "11"){
        return numToString+"th";
    }
    if (numToString.slice(-2) === "11"){
        return numToString+"th";
    }
    if (lastNum === "1"){  //age 1 bood, undefined mishod
        return numToString+"st";
    }
    if (lastNum === "2"){
        return numToString+"nd";
    }
    if (lastNum === "3"){
        return numToString+"rd";
    }
    else{
        return numToString+"th"
    }


}
//console.log(getOrdinalNumber(1));
test ('expected output is: 111th', ()=>{
    expect(getOrdinalNumber(111)).toBe("111th");
});
test ('expected output is: 11th', ()=>{
    expect(getOrdinalNumber(11)).toBe("11th");
});
test ('expected output is: 152nd', ()=>{
    expect(getOrdinalNumber(152)).toBe("152nd");
});
test ('expected output is: 1st', ()=>{
    expect(getOrdinalNumber(1)).toBe("1st");
});
