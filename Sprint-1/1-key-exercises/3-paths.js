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
/*
const slashIndex = filePath.indexOf("/");
const dir =filePath.slice(slashIndex + 0, 45) ;
const ext =filePath.slice(slashIndex + 49, 53);
console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The ext part of ${filePath} is ${ext}`);
*/

function pathFinder(userInput, filePath){
  // 1. Check if the user input exists inside the full path
  if (!fullPath.includes(userInput)) {
    console.log("Input not found in path");
    return;
  }

  // 2. Split the path into parts
  const parts = filePath.split("/");

  // 3. Base = last element
  const base = parts[parts.length - 1];

  // 4. Dir = everything except the last element
  const dir = parts.slice(0, parts.length - 1).join("/");

  // 5. Extension logic
  const dotIndex = base.lastIndexOf(".");
  const ext = dotIndex === -1 ? "" : base.slice(dotIndex);

  // 6. Print everything
  console.log(`Full path: ${filePath}`);
  console.log(`Directory: ${dir}`);
  console.log(`Base: ${base}`);
  console.log(`Extension: ${ext}`);

}

console.log(pathFinder(filePath));

// https://www.google.com/search?q=slice+mdn