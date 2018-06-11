module.exports = function calculateFrequency(string) {
  var freq = {};
  string.split("").forEach(function(s) {
    if(s!=" " && s>='a' && s<='z')
      freq[s] ? freq[s]++ : freq[s] = 1;
  });
  return freq;
}