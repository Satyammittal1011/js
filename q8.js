let a;
console.log(a === undefined);
console.log(a === null);
console.log(a*2);
console.log(`${a} is the value of a`);

//output
// true
// false
// NAN
// undefined is the value of a 


// reason
// a is define as a undefined in hoisting so first is true
// false because undefined is not equal to null
// NAN beacuse any operation with undefined gives NAN
// string farmating