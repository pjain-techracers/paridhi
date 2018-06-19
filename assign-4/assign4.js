const fs = require('fs');
var file1Content = ` file 1 content goes 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 `;
fs.writeFile("file1.txt", file1Content, (err,data) => {
  if(err)
    throw err;
  fs.readFile("file1.txt",(err,data) => {
    if(err)
      throw err;
    console.log("file 1 read");
    setTimeout( () => {
      var destination = fs.createWriteStream("file1.txt", {flags: 'a'});
      var source = fs.createReadStream("file2.txt");
      console.log("file 2 append");
      source.pipe(destination);
      setTimeout( () => {
        var destination = fs.createWriteStream("file3.txt", {flags: 'w'});
        var source = fs.createReadStream("file1.txt");
        console.log("file 3 written");
        source.pipe(destination);
        },0);
    },0);
  });
});
