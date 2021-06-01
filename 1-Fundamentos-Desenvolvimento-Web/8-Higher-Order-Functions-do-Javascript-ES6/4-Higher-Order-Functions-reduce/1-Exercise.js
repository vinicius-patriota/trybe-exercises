const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// Dada uma matriz, transforme em um array.

function flatten(arrays) {
    return arrays.reduce((acc, cur) => acc.concat(cur), [])
}

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);