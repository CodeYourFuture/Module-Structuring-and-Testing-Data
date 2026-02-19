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
const base = filePath.substring(lastSlashIndex + 1);
console.log(`Base part:  ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

const dir = filePath.substring(0, lastSlashIndex + 1);

const dotIndex = filePath.lastIndexOf(".");
const ext = filePath.substring(dotIndex + 1);

console.log(`Dir part: ${dir}`);
console.log(`Ext part: ${ext}`);

// https://www.google.com/search?q=slice+mdn

// After studying the slice() method I was able to do this task easily.
// The method I used is not working with all, for example if we change the name of our file from file.txt to best-file-ever.txt then out put is not what we want. ===> ever.txt; so we should find an other way ...
// to solve that we better use substring(lastSlashIndex + 1)method. this method works with any name we add.
// Before I used slice() which was working for the specific name or path but not for all type. and now this substring() method does work well almost on any type of path.
// thanks to "hkavalikas" because of his feedback I learned this useful method.