var a = {a: 1};
var b = {a: 1};
console.log(a == b);
console.log(a === b);
var c = a;
console.log(a == c);
console.log(a === c);



//output
// false
// false
// true
// true


//reason
//in object it check the refernce means memory location thats why it givrs false 
// then next c=a means both c and a point to the same object refernce