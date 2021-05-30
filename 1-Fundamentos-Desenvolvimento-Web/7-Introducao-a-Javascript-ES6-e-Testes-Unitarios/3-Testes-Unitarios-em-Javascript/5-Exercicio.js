// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
const assert = require("assert");

const greetPeople = (people) => {
    let greetingArr = [];
    let greeting = 'Hello ';

    for (index in people) {
        greetingArr.push(greeting + people[index]);
    }
    return greetingArr;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.strictEqual(typeof greetPeople, "function");
assert.deepStrictEqual(greetPeople(parameter), result, "Esperado o Hello na frente de cada elemento da array");
assert.notDeepStrictEqual(parameter, result, "Esperado que nao haja alteracao na array passada como parametro");