let arrayValue = [3,5,7];
let [x, ,y] = arrayValue;
console.log(x,y)

//output
// 3,7

//reason
// first value of arrayValue will assign to x
// second value of arrayValue will assign to no body beacuse we give space 
// thoird value will assign to y