let s="Danny is dancing ";
s=s.trim()
let arr=[];
let ll=[];
arr=s.split(" ");
for(var i=0;i<arr.length;i++){
    x=arr[i].split("")
    ll=ll.concat(x);
};
ll=ll.sort();
let new_s="";
for(var i=0;i<ll.length;i++){
    new_s+=ll[i];
};
console.log(new_s)