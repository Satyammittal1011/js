s="My name is Satyam Mittal and my firatname is Satyam ";
s1="hello everyone ";
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.trim());
console.log(s.split(" "));
console.log(s.slice(0,3));
console.log(s.slice(3));
console.log(s.slice(-15));
console.log(s.slice(-15,-10));
console.log(s.substring(0,17));
console.log(s.endsWith("s"));
console.log(s.startsWith("M"));
console.log(s.replace("Satyam","aditya"));
console.log(s.replace("satyam","aditya"));
//console.log(s.replaceAll("Satyam","aditya"));
console.log(s1+s);
console.log(s.indexOf("S"));



//output 
// MY NAME IS SATYAM MITTAL AND MY FIRATNAME IS SATYAM 
// my name is satyam mittal and my firatname is satyam 
// My name is Satyam Mittal and my firatname is Satyam
// [
//   'My',     'name',
//   'is',     'Satyam',
//   'Mittal', 'and',
//   'my',     'firatname',
//   'is',     'Satyam',
//   ''
// ]
// My 
// name is Satyam Mittal and my firatname is Satyam 
// name is Satyam 
// name 
// My name is Satyam
// false
// true
// My name is aditya Mittal and my firatname is Satyam 
// My name is Satyam Mittal and my firatname is Satyam 
// hello everyone My name is Satyam Mittal and my firatname is Satyam 
// 11

