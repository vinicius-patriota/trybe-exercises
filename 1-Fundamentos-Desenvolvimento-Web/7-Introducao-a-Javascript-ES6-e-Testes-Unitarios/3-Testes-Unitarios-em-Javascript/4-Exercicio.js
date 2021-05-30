// Escreva a função findTheNeedle para passar nos testes já implementados. 
const assert = require('assert');

function findTheNeedle (arr, str) {
    for (index in arr) {
        if (arr[index] === str) return parseInt(index);
    }
    return -1;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);