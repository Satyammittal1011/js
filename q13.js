//Regular expressions are patterns used to match character 
//combinations in strings. In JavaScript, regular expressions 
//are also objects

const isAlphanum = str => /^[a-zA-Z 0-9]*$/.test(str);
console.log(isAlphanum('sampleInput2423434')); 

//output
//true