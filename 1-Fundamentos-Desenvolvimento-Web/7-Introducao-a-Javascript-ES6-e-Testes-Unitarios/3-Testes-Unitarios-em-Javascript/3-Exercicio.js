// Escreva a função wordLengths para passar nos testes já implementados.
const assert = require('assert');

function wordLengths(arr) {
    let lengths = [];
    for (index in arr) lengths.push(arr[index].length);
    return lengths;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);