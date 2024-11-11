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
const filePathDir = filePath.slice(- 41);
console.log(`The dir part of the ${filePath} is ${filePathDir}`);
// Create a variable to store the ext part of the variable
const filePathExt = filePath.slice(-3);
console.log(`The ext part of the ${filePath} is ${filePathExt}`);
