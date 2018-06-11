module.exports = function flatten(unflatObject) {
  var output={};
  for(var i in unflatObject) {
    if(!unflatObject.hasOwnProperty(i))
      continue;
    if((typeof unflatObject[i])==="object") { 
      var flat = flatten(unflatObject[i]);
      for (var x in flat) {
        if(!flat.hasOwnProperty(x)) 
          continue;
        output[i+'.'+x]=flat[x];
      }
    }
    else 
      output[i]= unflatObject[i];
  }
  return output;
}
