(function(){
    setTimeout(()=> console.log(1),2000);
    console.log(2);
    setTimeout(()=> console.log(3),0);
    console.log(4);
    })();

// output
// 2
// 3
// 4
// 1


//reason
// initially we set a settimeout for 2 sec so it go to waiting area
// then console.log(2) will execute and print 2
// then again settimeout but this time for 0 sec o it will execute at that instance
// then console.log(4) will execute
// and in last when call stach will empty function which are in queue will come
// and execute