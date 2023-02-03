console.log("0 || 1 = "+(0 || 1));
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));


//output
// 0 || 1 = 1
// 1 || 2 = 1
// 0 && 1 = 0
// 1 && 2 = 2

// reason 
// in or opertaor if first conditon is true it will give result 
// if not then check second operand
// in and operator if first condiotn is false it will return 0
// and if ffirst operand is true then check for second 
// and if second is true than it will give second operand as a output
// otherwise it will give 0