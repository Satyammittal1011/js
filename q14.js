function f1(arr){
    let ans=[];
    for(var ele of arr){
        if (ele.age%2==0){
            ans.push(ele);
        }
    }
    return ans
};

var arr=[
    {name:"karl", age:20},
    {name:"karl", age:23}, 
    {name:"mary", age:21}, 
    {name:"aston", age:22} 
];

var output=f1(arr);
console.log(output)