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
const dir = filePath.slice(0, lastSlashIndex); // Extract the directory part (everything before the last slash)

// Create a variable to store the ext part of the variable
const lastDotIndex = base.lastIndexOf("."); // Find the index of the last dot in the base to get the extension
const ext = lastDotIndex !== -1 ? base.slice(lastDotIndex) : ""; // Extract the extension (including the dot), or empty string if none

console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The ext part of ${filePath} is ${ext}`);

// https://www.google.com/search?q=slice+mdn
