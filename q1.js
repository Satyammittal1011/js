let arrayValue = [13];
let [x = 5, y = 7, z = 10] = arrayValue;
console.log(x,y,z)
//output
// 13,7,10

// reason
// arrayValue will contain only one value 
//which is assign to x and rest of the value
// will be same for y and z