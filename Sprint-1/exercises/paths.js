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

// Find the index of the last dot
const lastDotIndex = filePath.lastIndexOf(".");

// Extract the base part (we already have this)

// Extract the dir part (everything before the last slash)
const dir = filePath.slice(0, lastSlashIndex);

// Extract the ext part (everything after the last dot)
const ext = filePath.slice(lastDotIndex + 1);

console.log(`The base part of ${filePath} is ${base}`); // file.txt
console.log(`The dir part of ${filePath} is ${dir}`);   // /Users/mitch/cyf/Module-JS1/week-1/interpret
console.log(`The ext part of ${filePath} is ${ext}`);   // txt