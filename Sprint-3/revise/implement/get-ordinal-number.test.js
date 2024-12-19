// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(num){
    let ord = "th";
    if(num % 10 === 1 && num % 100 !== 11){
        ord = "st"
    }else if(num % 10 === 2 && num % 100 !== 12){
        ord = "nd"
    }else if(num % 10 === 3 && num % 100 !== 13){
        ord = "rd"
    }
 return `${num}${ord}`
}
test("implementing function that getOrdinalNumber",()=> {
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(45)).toBe("45th");
    expect(getOrdinalNumber(55)).toBe("55th");
})