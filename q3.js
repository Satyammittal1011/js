const arrayValue = [1, 2, 3, 4];
const [x, ...y] = arrayValue;
console.log(x,y)

//output
//1,[2,3,4]

// reason
//The rest parameter syntax allows us to represent 
//an indefinite number of arguments as an array.