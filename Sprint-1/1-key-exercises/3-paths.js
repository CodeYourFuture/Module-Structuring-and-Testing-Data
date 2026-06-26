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

const lastindex1 = filePath.lastIndexOf("/");
const dir1 = filePath.slice(0,lastindex1);
console.log(`The variable contains directory path of a file: ${dir1}`); 
const dir = filePath.slice(0,44);
console.log(`This variable stores directory path of a file: ${dir}`);
//I did from both ways just to clear my concepts.

const lastext = filePath.lastIndexOf("/");
const ext = filePath.slice(lastext+5);
console.log(`This is extension part of a file: ${ext}`);

// https://www.google.com/search?q=slice+mdn