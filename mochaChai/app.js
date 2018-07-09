const _ = require('lodash')
module.exports = {
  secondLargest: (array) => {
    if(!Array.isArray(array))
      throw new Error(`must pass array as argument`)
    if(array.some(isNaN))
      throw new Error(`array must contain only numbers`)
    if(array.length < 2)
     throw new Error(`array size is less than 2`);
    if(array.some((index) => {
      if(index === null)
        throw new Error(`array contains some null`)
    }))
    var large = ( array[0] > array[1] ) ? array[0] : array[1] ;
    var secLarge = ( array[0] > array[1]) ? array[1] : array[0] ;
    for(let index=2 ; index<array.length ; index++) {
      if(array[index] > large) {
        secLarge = large ;
        large = array[index] ;
      }
      else if( array[index] > secLarge && large != array[index])
        secLarge = array[index] ;
    }
    return secLarge;
  } ,

  calculateFrequency: (string) => {
    if(typeof string !== "string")
      throw new Error(`input must be an string`);
    if(!string.trim().length)
      throw new Error(`input is empty string`);
    let freq = {};
    string.split("").forEach((char) => {
      if(char!=" " && char>='a' && char<='z')
        freq[char] ? freq[char]++ : freq[char] = 1;
    });
    return freq;
  } ,

  flatten: function flatten(unflatObject) {
    if(typeof unflatObject !== "object")
      throw new Error(`input must be an object`);
    if( _.isEmpty(unflatObject) )
      throw new Error(`object is empty`);
    let output = {};
    for(let index in unflatObject) {
      if(!unflatObject.hasOwnProperty(index))
        continue;
      if((typeof unflatObject[index])==="object") { 
        let flat = flatten(unflatObject[index]);
        for (let key in flat) {
          if(!flat.hasOwnProperty(key)) 
            continue;
          output[index+'.'+key]=flat[key];
        }
      }
      else 
        output[index]= unflatObject[index];
    }
    return output;
  }
}
