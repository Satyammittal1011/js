console.log(0/0 === 0/0);
console.log(0/0 == 0/0);
console.log(Number.isNaN(0/0) === Number.isNaN(0/0));


//output
//false
//false
//true


//reason
//0/0 gives NaN and we can not compare NaN to other NaN
//number.isNaN(0/0) gives true and true===true is true
