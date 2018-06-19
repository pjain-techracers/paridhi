module.exports = {
  secondLargest: function (array) {
    var large = ( array[0] > array[1] ) ? array[0] : array[1] ;
    var secLarge = ( array[0] > array[1]) ? array[1] : array[0] ;
    for(var i=2 ; i<array.length ; i++) {
      if(array[i] > large) {
        secLarge = large ;
        large = array[i] ;
      }
      else if( array[i] > secLarge && large != array[i])
        secLarge = array[i] ;
    }
    return secLarge;
  } ,

  calculateFrequency: function (string) {
    var freq = {};
    string.split("").forEach(function(s) {
      if(s!=" " && s>='a' && s<='z')
        freq[s] ? freq[s]++ : freq[s] = 1;
    });
    return freq;
  } ,

  flatten: function flatten(unflatObject) {
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
}
