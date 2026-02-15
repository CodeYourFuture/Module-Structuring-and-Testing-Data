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

//Answer:
//**where the file lives** 
// It gives me everything from Index 0 to 
// the last slash just before the filename.
const dir = filePath.slice(0, lastSlashIndex); 
console.log(dir);

//Answer:
//**what type of file**
//Uses the the lastIndexOf method to look for the dot.
//the dot is now index 0 so we start from index 1 onwards 
// to get the file type.
const ext = filePath.slice(filePath.lastIndexOf(".") + 1);
console.log(ext);

// https://www.google.com/search?q=slice+mdn