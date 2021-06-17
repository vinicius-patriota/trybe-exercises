const funcao = require('./2-Exercicios');

/*
Para as funções encode e decode crie os seguintes testes:
    Teste se encode e decode são funções;
    Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
    Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;
    Teste se as demais letras/números não são convertidos para cada caso;
    Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
*/

describe('Exercicio 1 - Teste das funcoes encode e decode', () => {
    it('Testa se encode e uma funcao', () => {
        expect(typeof funcao.encode).toBe('function');
    });
    it('Testa se decode e uma funcao', () => {
        expect(typeof funcao.decode).toBe('function');
    });
    it('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(funcao.encode('aeiou')).toBe('12345');
    });
    it('Testa se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
        expect(funcao.decode('12345')).toBe('aeiou');
    });
    it('Testa se as demais letras não são convertidas no encode', () => {
        expect(funcao.encode('bcdfgh')).toBe('bcdfgh');
    });
    it('Testa se os demais numeros não são convertidas no decode', () => {
        expect(funcao.decode('6789')).toBe('6789');
    });
    it('Testa se a string que é retornada pela funçao encode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(funcao.encode('abcdefghij').length).toBe('abcdefghij'.length);
    });
    it('Testa se a string que é retornada pela funçao decode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(funcao.decode('abcdefghij').length).toBe('abcdefghij'.length);
    });
});