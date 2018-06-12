var fs = require('fs');
var file1Content = ` file 1 content goes 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
  1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 `;
fs.writeFile("file1.txt",file1Content,function(err,data) {
  if(err) throw err;
  else
  console.log("file 1 content");
});

var read1 = function() {
  return new Promise ( function (resolve,reject) {
    fs.readFile("file1.txt",(err,data) => {
      if(err)
        reject("error occured in reading file1");
      else
        resolve("file 1 read successfull");
    });
  });
}

var append = function() {
  return new Promise(function(resolve,reject) {
      var w = fs.createWriteStream("file1.txt", {flags: 'a'});
      var r = fs.createReadStream("file2.txt");
      r.pipe(w);
      resolve("file2 appended in file 1");    
  });
}

var write = function() {
  return new Promise(function(resolve,reject) {
    var w = fs.createWriteStream("file3.txt", {flags: 'w'});
    var r = fs.createReadStream("file1.txt");
    r.pipe(w);
    resolve("file2 appended in file 1");
  });
}

read1().then(function() {
  return append();
}).then(function() {
  return write();
})
