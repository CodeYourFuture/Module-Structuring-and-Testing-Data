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
// The base part of /Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt is file.txt

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const dir = filePath.slice(0, lastSlashIndex); // Keeps everything except the last slash just before week-1/interpret.
const ext = filePath.slice(lastSlashIndex + 1).split(".")[1]; // Keeps everything after the last slash and splits it into an array of strings at the dot.
console.log(`The dir part of ${filePath} is ${dir}`); 
console.log(`The ext part of ${filePath} is ${ext}`);
// The dir part of /Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt is /Users/mitch/cyf/Module-JS1/week-1/interpret
// The ext part of /Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt is txt

// https://www.google.com/search?q=slice+mdn
