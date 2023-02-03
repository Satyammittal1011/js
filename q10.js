let counter = 1;
const intervalId = setInterval(() => {
  console.log(`${counter} seconds`);
  counter += 1;
if (counter === 11) {
    clearInterval(intervalId);
  }
},1000);

