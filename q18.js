var a = () => {
    console.log("a called");
    };
    a();
    var a = 34;
    a();

//output
//it will give a error that a is not a function


// reason
// bcause initally a is a function in global scope and 
//then after the complete executeion of a function
// we change a to a variable beacuse var is muttable
// for it read a as a variable not as a function