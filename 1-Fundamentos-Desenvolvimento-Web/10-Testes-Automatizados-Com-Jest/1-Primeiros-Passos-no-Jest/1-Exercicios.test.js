/*
A função sum(a, b) retorna a soma do parâmetro a com o b
    Teste se o retorno de sum(4, 5) é 9
    Teste se o retorno de sum(0, 0) é 0
    Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
    Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

const funcao = require('./1-Exercicios');

describe('Exercicio 1 - funcao sum', () => {
    it('Testa se o retorno de sum(4, 5) é 9', () => {
        expect(funcao.sum(4, 5)).toBe(9);
    });
    it('Testa se o retorno de sum(0, 0) é 0', () => {
        expect(funcao.sum(0, 0)).toBe(0);
    });
    it('Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
        expect(() => { funcao.sum(4, '5') }).toThrow();
    });
    it('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
        expect(() => { funcao.sum(4, '5') }).toThrowError('parameters must be numbers');
    });
});

/*
A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
    Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array[1, 2, 3, 4]
    Verifique se o array passado por parâmetro não sofreu alterações
    Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/

describe('Exercicio 2 - Funcao myRemove', () => {
    it('Testa se a chamada myRemove([1, 2, 3, 4], 3) retorna o array [1, 2, 3]', () => {
        expect(funcao.myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Testa se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array[1, 2, 3, 4]', () => {
        expect(funcao.myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Testa se o array passado por parâmetro não sofreu alterações', () => {
        const arr = [1, 2, 3, 4];
        expect(funcao.myRemove(arr, 3)).not.toEqual(arr);
    });
    it('Testa se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
        expect(funcao.myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

/*
A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
    Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
    Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array[1, 2, 3, 4]
    Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
    Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
*/

describe('Exercicio 3 - Funcao myRemoveWithoutCopy', () => {
    it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array [1, 2, 3]', () => {
        expect(funcao.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array[1, 2, 3, 4]', () => {
        expect(funcao.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Testa se o array passado por parâmetro não sofreu alterações', () => {
        const arr = [1, 2, 3, 4];
        expect(funcao.myRemoveWithoutCopy(arr, 3)).toEqual(arr);
    });
    it('Testa se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
        expect(funcao.myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

/*
A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
    Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
*/

describe('Exercicio 4 - Funcao myFizzBuzz', () => {
    it('Testa uma chamada com um número divisível por 3 e 5 e verifica se o retorno é "fizzbuzz"', () => {
        expect(funcao.myFizzBuzz(15)).toBe("fizzbuzz");
    });
    it('Testa uma chamada com um número divisível por 3 e verifica se o retorno é "fizz"', () => {
        expect(funcao.myFizzBuzz(3)).toBe("fizz");
    });
    it('Testa uma chamada com um número divisível por 3 e verifica se o retorno é "buzz"', () => {
        expect(funcao.myFizzBuzz(5)).toBe("buzz");
    });
    it('Testa uma chamada com um número que não é divisível por 3 ou 5 e verifica se o retorno é o proprio numero', () => {
        expect(funcao.myFizzBuzz(2)).toBe(2);
    });
    it('Testa uma chamada com um parâmetro que não é um número e verifica se o retorno é false', () => {
        expect(funcao.myFizzBuzz("2")).toBe(false);
    });
});

// Compare dois objetos para verificar se são idênticos ou não 

describe('Exercicio 5 - Comparar objetos', () => {
    it('Verifica que obj1 e obj2 nao sao estritamente iguais', () => {
        expect(funcao.obj1).not.toBe(funcao.obj2);
    });
    it('Verifica que obj1 e obj2 sao iguais', () => {
        expect(funcao.obj1).toEqual(funcao.obj2);
    });
    it('Verifica que obj1 e obj3 nao sao estritamente iguais', () => {
        expect(funcao.obj1).not.toBe(funcao.obj3);
    });
    it('Verifica que obj1 e obj3 nao sao iguais', () => {
        expect(funcao.obj1).not.toEqual(funcao.obj3);
    });
});