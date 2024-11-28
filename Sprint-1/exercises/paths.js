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
let dirPart = filePath.substring(0, lastSlashIndex); 
let extPart = filePath.substring(filePath.lastIndexOf('.') + 1); 
console.log("Directory Part:", dirPart); // Output: "/user/documents"
console.log("Extension Part:", extPart); 
// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable
