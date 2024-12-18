// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)
console.log()
const filePath = "/folder1/.git/folder2.secret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

console.log()


// Create a variable to store the dir part of the filePath variable

//const indexOfFirstslash = filePath.indexOf("/");
const dir=filePath.slice(1,lastSlashIndex)
console.log(`The dir part of ${filePath} is ${dir}`);



// Create a variable to store the ext part of the variable
console.log(filePath.length)
const indexOfFullStop = filePath.lastIndexOf(".");
const ext=filePath.slice(indexOfFullStop,filePath.length)
console.log(`The ext part of ${filePath} is ${ext}`);
console.log()



