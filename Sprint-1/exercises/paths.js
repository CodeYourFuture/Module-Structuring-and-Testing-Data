// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";

// Get the last slash index
const lastSlashIndex = filePath.lastIndexOf("/");

// Extract the base part
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath
const dir = filePath.slice(0, lastSlashIndex);

// Create a variable to store the name and ext parts
const nameAndExt = base;
const dotIndex = nameAndExt.lastIndexOf(".");
const name = nameAndExt.slice(0, dotIndex);
const ext = nameAndExt.slice(dotIndex + 1);

// Log the results
console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The name part of ${filePath} is ${name}`);
console.log(`The ext part of ${filePath} is ${ext}`);


// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable
