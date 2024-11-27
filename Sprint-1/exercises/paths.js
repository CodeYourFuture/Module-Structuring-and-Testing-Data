// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)


/* ================  lastIndexOf() ===================

    -we use this to obtain the last position of / where is located the File.txt
    -const base = filePath.slice(lastSlashIndex + 1); with + 1 we start to subtract after /
    Index:       0    1    2  ...    37   38       39      40      41      42
    filePath:    /   U    s   ...    /    f        i       l       e       .txt
    -
*/

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
console.log(lastSlashIndex); //   44
const base = filePath.slice(lastSlashIndex + 1);
console.log(base); //  file.txt
// console.log(`The base part of ${filePath} is ${base}`);


// Create a variable to store the dir part of the filePath variable
const lastDotIndex = filePath.lastIndexOf(".");
console.log(lastDotIndex); //   index position 49
const extractDir = filePath.slice(0, lastDotIndex);
console.log(`Directory and filename (without extension) is: ${extractDir}`);


// Create a variable to store the ext part of the variable"
const extensionName = filePath.slice(lastDotIndex + 1);
console.log(`extension: ${extensionName}`);   //  txt
