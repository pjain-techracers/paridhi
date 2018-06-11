module.exports = function secondLargest(array) {
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
}