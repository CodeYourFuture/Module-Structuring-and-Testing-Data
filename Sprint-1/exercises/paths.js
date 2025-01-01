// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");//44
const base = filePath.slice(lastSlashIndex + 1);//file.txt
console.log(`The base part of ${filePath} is ${base}`);// The base part of /Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt is file.txt

// Create a variable to store the dir part of the filePath variable
let dirPart = filePath.slice(0, lastSlashIndex)
console.log(dirPart)//    /Users/mitch/cyf/Module-JS1/week-1/interpret


// Create a variable to store the ext part of the variable

const lastDotIndex = filePath.lastIndexOf(".");

let extPart = lastDotIndex > lastSlashIndex ? filePath.slice(lastDotIndex) : "";
;
console.log(extPart)