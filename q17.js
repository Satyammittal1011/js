let ob=[
    {name:"karl", age:20},
    {name:"karl", age:23}, 
    {name:"mary", age:20}, 
    {name:"aston", age:20} 
];
let output=[];
let ll=[];
let ans=[];
for(var ele of ob){
    if (ll[ele.name]!=1){
        ll[ele.name]=1;
        output.push(ele);
    }
    else{
    ll[ele.name]+=1;
    }
};
for(var ele of output){
    if(ll[ele.name]===1){
        ans.push(ele);
    }
}
console.log(ans)
