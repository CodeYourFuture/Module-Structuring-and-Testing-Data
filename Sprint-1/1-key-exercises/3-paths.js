// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";

// Find the last slash and we can seperate the base from "dir"
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);

// Find the last dot
const lastDot = base.lastIndexOf(".");
// console.log(`The base part of ${filePath} is ${base}`);

// Ectract everything before the base
const dir = filePath.slice(0, lastSlashIndex);
// Extract the txt extention from the dot
const ext = base.slice(lastDot);










// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable
console.log(`The base part of ${filePath} is ${base}`);
// Moved to bottom its confusing me