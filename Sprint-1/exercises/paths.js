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
// console.log(lastSlashIndex);
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

const dir = filePath.slice(0, lastSlashIndex);
console.log(`The directory part of ${filePath} is ${dir}`);

const ext = base.slice(4);
console.log(`The ext part of ${filePath} is ${ext}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable
