const assert = require('assert');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];


function containsA(names) {
    return names.reduce((prev, curr) => prev + (curr.match(/a/gi) || []).length, 0);
}

assert.deepStrictEqual(containsA(names), 20);