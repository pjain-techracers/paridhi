var fs = require('fs');
var file1Content= ` file 1 content goes 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 `;
fs.writeFile("file1.txt",file1Content,function(err,data) {
  if(err)
    throw err;
  else
    console.log("file 1 content");
});

fs.readFile("file1.txt",(err,data) => {
  if(err)
    throw err;
  else
    console.log("file 1 read");
});

var w = fs.createWriteStream("file1.txt", {flags: 'a'});
var r = fs.createReadStream("file2.txt");
r.pipe(w);

var w = fs.createWriteStream("file3.txt", {flags: 'w'});
var r = fs.createReadStream("file1.txt");
r.pipe(w);
