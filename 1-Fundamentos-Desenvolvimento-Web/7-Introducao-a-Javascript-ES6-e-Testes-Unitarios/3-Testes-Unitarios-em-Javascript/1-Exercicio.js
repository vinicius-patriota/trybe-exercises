const assert = require('assert');

function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") throw new Error("parameters must be numbers");
    return a + b;
}

// Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(sum(4, 5), 9, "4 + 5 = 9");
// Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0, "0 + 0 = 0");
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => { sum(4, "5"), /^Error: parameters must be numbers$/ });


function myRemove(arr, item) {
    let newArr = [];
    for (index in arr) {
        if (arr[index] !== item) newArr.push(arr[index]);
    }
    return newArr;
}

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado 
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "Com o elemento 3 removido a array deve ficar [1, 2, 4]");
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], "Com o elemento 3 removido a array deve ficar [1, 2, 4]")
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], "Sendo que o item nao existe na array a array de retorno nao deve ser modificada");

function myRemoveWithoutCopy(arr, item) {
    for (index in arr) {
        if (arr[index] === item) arr.splice(index, 1);
    }
    return arr;
}

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado 
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "Com o elemento 3 removido a array deve ficar [1, 2, 4]");
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], "Com o elemento 3 removido a array deve ficar [1, 2, 4]")
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado 
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], "Sendo que o item nao existe na array a array de retorno nao deve ser modificada");

function myFizzBuzz(num) {
    if (typeof num !== "number") return false;

    if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
    if (num % 3 === 0) return "fizz";
    if (num % 5 === 0) return "buzz";

    return num;
}

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado 
assert.strictEqual(myFizzBuzz(15), "fizzbuzz", "Retorna 'fizzbuzz' se o número for divisível por 3 e 5");
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(3), "fizz", "Retorna 'fizz' se o número for divisível por 3");
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(5), "buzz", "Retorna 'buzz' se o número for divisível por 5");
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz(4), 4, "Retorna o proprio numero se nao for divisivel por 3 e nem por 5");
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.strictEqual(myFizzBuzz('5'), false, "Retorna false se nao for um numero");

const obj1 = {
    title: 'My Title',
    description: 'My Description',
};

const obj2 = {
    description: 'My Description',
    title: 'My Title',
};

const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
};

// Compare dois objetos para verificar se são idênticos ou não
assert.deepStrictEqual(obj1, obj2, "Sao objetos identicos");
assert.notDeepStrictEqual(obj1, obj3, "Nao sao objetos identicos");
