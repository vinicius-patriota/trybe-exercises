const fs = require('fs').promises;

function main(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject("Nao e um numero");
    };

    const result = (a + b) * c;

    if (result < 50) {
      reject("Valor muito baixo");
    } else {
      resolve(result);
    };
  })
};

main(1, 2, 3)
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.error(`error happened\n ${err}`)
  })