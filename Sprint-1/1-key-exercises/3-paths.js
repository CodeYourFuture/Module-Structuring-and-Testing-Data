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
console.log(`The base part is ${base}`);

// Create a variable to store the dir part of the filePath variable

firstSlashIndex = filePath.indexOf("/");    //the first / indicates the root...I think
const dir = filePath.slice(firstSlashIndex+1,lastSlashIndex+1);     //extract the part after the first / and to the last /
console.log(`The directory of the file path is ${dir}`);

// Create a variable to store the ext part of the variable
const ext = base.slice(base.lastIndexOf("."));      //find the last . in the file path, NB their may be more than one
console.log(`The extension of the file path is ${ext}`);

// https://www.google.com/search?q=slice+mdn