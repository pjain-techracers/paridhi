const fs = require('fs');
var file1Content = ` file 1 content goes 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 `;

var writeInFile1 = () => {
  return new Promise ( (resolve,reject) => {
    fs.writeFile("file1.txt", file1Content, (err,data) => {
      if(err)
        reject("error occured in reading file1");
      resolve("file 1 written initially");
    });
  });
}

var read1 = () => {
  return new Promise ( (resolve,reject) => {
    fs.readFile("file1.txt",(err,data) => {
      if(err)
        reject("error occured in reading file1");
      resolve("file 1 read successfull");
    });
  });
}

var append = () => {
  return new Promise((resolve,reject) => {
    var destination = fs.createWriteStream("file1.txt", {flags: 'a'});
    var source = fs.createReadStream("file2.txt");
    source.pipe(destination);
    resolve("file2 appended in file 1");    
  });
}

var write = () => {
  return new Promise( (resolve,reject) => {
    var destination = fs.createWriteStream("file3.txt", {flags: 'w'});
    var source = fs.createReadStream("file1.txt");
    source.pipe(destination);
    resolve("file3 written ");
  });
}

writeInFile1()
  .then(() => read1())
  .then(() => append())
  .then(() => write())
