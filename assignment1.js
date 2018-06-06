// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  var largest=( array[0]>array[1])?array[0]:array[1];
  var seclargest=( array[0]>array[1])?array[1]:array[0];
  for(var i=2;i<array.length;i++)
    {
      if(array[i]>largest)
        {
          seclargest=largest;
          largest=array[i];
        }
      else if(array[i]>seclargest && largest!=array[i])
        seclargest=array[i];
    }
  return seclargest;
  
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) 
{var freq = {}
  string.split("").forEach(function(s) {
    if(s!=" " && s>='a' && s<='z')
    freq[s] ? freq[s]++ : freq[s] = 1;
  });console.log(freq);
  return freq;}

/*
  var freq=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for(var i=0;i<string.length();i++)
    {
      freq[string[i]]++;
    }
  
  var charFreq={};
 
 for(var i=0;i<string.length();i++)
    {
      if(string[i]!=" " && string[i]>='a' && string[i]<='z')
        charFreq.string[i]=freq[string[i]];
    }
  console.log(charFreq);
 return charFreq;
 
}*/
  

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
  var output={};
  
 
  
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
}

