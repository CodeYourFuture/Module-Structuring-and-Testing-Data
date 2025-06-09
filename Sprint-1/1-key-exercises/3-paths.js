// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");//looks for index of last slash.
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable


const dir = filePath.slice(0,lastSlashIndex+1);
console.log(`The dir part is ${dir}`)

const LastDotIndex = filePath.lastIndexOf(".") //looks for the last dot in the string
const ext = filePath.slice(LastDotIndex+1);
console.log(`The ext is ${ext}`)

// https://www.google.com/search?q=slice+mdn