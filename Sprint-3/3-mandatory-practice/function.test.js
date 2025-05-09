const { default: expect } = require('expect');
const functions = require('./function');


test('adds 5 + 5 = 10', () => {
    expect(functions.add(5, 5)).toBe(10)
}); // .toBe is called a matcher


test('this will be less than 100', () => {
    const load1 = 20;
    const load2 = 40;
    expect(load1 + load2).toBeLessThan(90);
});

test('print one by one', () => {
    let str = "Hello There"; 
for (let i = 0; i < str.length; i++) {

    console.log(str[i]);
}
})

//const userName = 'Nicholas';
//console.log(userName.toUpperCase());
//console.log(userName.charAt(3));

