const obj1 = {first: 20, second: 30, first: 50};
console.log(obj1);

//output
// {fisrt:50,second:30}

//reason
//we cann not create same key twice means
//key must be unique
//so first will be override with initial value of first