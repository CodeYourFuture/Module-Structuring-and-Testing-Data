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
const base = filePath.slice(lastSlashIndex + 1); // from filePath it will show file.txt
console.log(`The base part of ${filePath} is ${base}`); // it will print the base part of the filePath variable.

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const dir = filePath.slice(0, lastSlashIndex); // from FilePath it will show /Users/mitch/cyf/Module-JS1/week-1/interpret.
console.log(`The dir part of ${filePath} is ${dir}`); // it will print the dir part of the filePath variable.

const ext = base.slice(base.lastIndexOf(".")); // from base it will show .txt
console.log(`The ext part of ${filePath} is ${ext}`); // it will print the ext part of the filePath variable.
