var arr=[];
arr.push(10);
arr.push('satyam');
arr.push(22);
console.log(arr);
var x=arr.pop();
console.log(arr);
arr.push('aditya');
arr.push("akshay");
console.log(arr);
var x=arr.shift();
console.log(x);
arr.unshift("mittal");
console.log(arr);

var ll=[1,5,2,78,45,34,87,3];
var ll=ll.sort();
console.log(ll);
console.log(ll.reverse());
console.log(ll.slice(1,5));
console.log(ll.splice(2,0,23));
console.log(ll.join("-"));
console.log(ll.concat(arr))

var ll=[1,2,3,4,5];
var l=ll.map(ele=>ele*2);
console.log(l);

var l=ll.filter(ele=>ele%2==0);
console.log(l);

var l=ll.reduce(function(result,item){
    return result+item;
},0);
console.log(l);

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 

//output
// [ 10, 'satyam', 22 ]
// [ 10, 'satyam' ]
// [ 10, 'satyam', 'aditya', 'akshay' ]
// 10
// [ 'mittal', 'satyam', 'aditya', 'akshay' ]
// [
//    1, 2,  3, 34,
//   45, 5, 78, 87
// ]
// [
//   87, 78, 5, 45,
//   34,  3, 2,  1
// ]
// [ 78, 5, 45, 34 ]
// []
// 87-78-23-5-45-34-3-2-1
// [
//   87,       78,       23,
//   5,        45,       34,
//   3,        2,        1,
//   'mittal', 'satyam', 'aditya',
//   'akshay'
// ]
// [ 2, 4, 6, 8, 10 ]
// [ 2, 4 ]
// 15
// { dog: 2, chicken: 3, cat: 1, rabbit: 1 }
