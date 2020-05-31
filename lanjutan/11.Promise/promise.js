const isNumber = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(a) || isNaN(b)) {
        err = "One of input is not a number";
        reject(err);
      } else {
        resolve(true);
      }
    }, 500);
  });

const divide = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        err = "Divide by zero";
        return reject(err);
      }

      const result = Number(a) / Number(b);
      resolve(result);
    }, 1500);
  });

const multiply = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Number(a) * Number(b);
      resolve(result);
    }, 1000);
  });

const add = (a, b) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Number(a) + Number(b);
      resolve(result);
    }, 500);
  });

// promise start here...
isNumber(6, 3)
  .then(() => {
    const a = 4;
    return divide(6, 3);
  })
  .then((result) => {
    return multiply(result, 7);
  })
  .then((result) => add(result, 1))
  .then((result) => {
    console.log(`The final result is ${result}`);
  })
  .catch((err) => console.log(err));
