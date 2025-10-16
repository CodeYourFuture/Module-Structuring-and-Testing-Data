// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)
                  //home / user /dir /                          file.txt; 
const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/"); //=index 47 /
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);



// Create a variable to store the dir part of the filePath variable
const dir = filePath.slice(0, lastSlashIndex + 1);
console.log(`The directory part is: ${dir}`);

// Create a variable to store the ext part of the variable
const lastDotIndex = filePath.lastIndexOf("."); // look for the last Dot
const extPart = filePath.slice(lastDotIndex + 1); 
console.log(`The extension part is: ${extPart}`); 

// https://www.google.com/search?q=slice+mdn

