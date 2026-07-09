// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);

console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable
const firstSlash = filePath.indexOf("/");
const period = filePath.indexOf(".");
const secondSlash = filePath.indexOf("/", firstSlash + 1);
const thirdSlash = filePath.indexOf("/", secondSlash + 1);
const fourthSlash = filePath.indexOf("/", thirdSlash + 1);
const fifthSlash = filePath.indexOf("/", fourthSlash + 1);
const sixthSlash = filePath.indexOf("/", fifthSlash + 1);
const seventhSlash = filePath.indexOf("/", sixthSlash + 1);
const eighthSlash = filePath.indexOf("/", seventhSlash + 1);




const dir = filePath.slice(firstSlash , seventhSlash + 1);
console.log(dir)
 const ext = filePath.slice(period);
console.log(ext)

// https://www.google.com/search?q=slice+mdn