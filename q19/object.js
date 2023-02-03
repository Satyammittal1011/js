var ob={
    name:'satyam',
    age:22,
    address:"ghazibad",
    greet : () => "Hello",

}
var arr=Object.keys(ob);
console.log(arr);
var arr=Object.values(ob);
console.log(arr);
ob.name='aditya';
console.log(ob)
console.log(ob.greet());



//output
// [ 'name', 'age', 'address', 'greet' ]
// [ 'satyam', 22, 'ghazibad', [Function: greet] ]
// {
//   name: 'aditya',
//   age: 22,
//   address: 'ghazibad',
//   greet: [Function: greet]
// }
// Hello
