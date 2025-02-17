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
const base = filePath.slice(lastSlashIndex + 2);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const dir = filePath.slice(7, lastSlashIndex);
const lastDotIndex = filePath.lastIndexOf(".")
const ext = filePath.slice(lastDotIndex);
console.log( `this is the dir part ${dir}`);
console.log(`This is the ext part ${ext}`);


// the lastSlashIndex variable finds the last slash in the file path using the lastIndexOf function
// with the slice function it removes the number of characters based on what is inside of the brackets
