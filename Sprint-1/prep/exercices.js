function calculateArea (width, height){
    const area = width * height;
    return area;
}

let width = 9;
let height = 11;

const area= calculateArea (width, height)

console.log(area)

// Exercise 2

function capitaliseFirstLetter (name){
    const newName = name[0].toUpperCase() + name.substring(1);
    return newName;
}

let name = "darius";
const changedName = capitaliseFirstLetter(name)

const greeting = `Welcome ${changedName}`

console.log(greeting)