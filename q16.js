function f1() {
    const promise = new Promise((resolve, reject) => {
      resolve("From f1");
    });
    return promise;
  }
  function f2() {
    const promise = new Promise((resolve, reject) => {
      resolve("From f2");
    });
    return promise;
  }
  function f3() {
    const promise = new Promise((resolve, reject) => {
      resolve("From f3");
    });
    return promise;
  }
  function f4() {
    const promise = new Promise((resolve, reject) => {
      resolve("From f4");
    });
    return promise;
  }
  f1()
    .then((data) => {
      console.log(data);
      return f2();
    })
    .then((data) => {
      console.log(data);
      return f3();
    })
    .then((data) => {
      console.log(data);
      return f4();
    })
    .then((data) => {
      console.log(data);
    });
  
  
  
  
  
  
  
  
  
  