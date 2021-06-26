const math = require('./1-Exercises');

describe('Exercicios', () => {
    it('Exercicio 1 a 3 - Funcao random', () => {
        const mockRandom = jest.spyOn(math, 'random');
        mockRandom.mockReturnValue(10);

        mockRandom();
        expect(mockRandom).toHaveBeenCalled();
        expect(mockRandom).toHaveBeenCalledTimes(1);
        expect(mockRandom()).toBe(10);

        mockRandom.mockImplementation((a, b) => a / b);
        mockRandom();
        expect(mockRandom).toHaveBeenCalled();
        expect(mockRandom).toHaveBeenCalledTimes(3);
        expect(mockRandom(2, 1)).toBe(2);

        mockRandom.mockImplementation((a, b, c) => a * b * c);
        mockRandom();
        expect(mockRandom).toHaveBeenCalled();
        expect(mockRandom).toHaveBeenCalledTimes(5);
        expect(mockRandom(1, 2, 3)).toBe(6);
    });

    it('Exercicio 4 e 5 - funcoes upperCase, firstLetter e concat', () => {
        const mockUpperCase = jest.spyOn(math, 'upperCase');
        mockUpperCase.mockImplementation((str) => str.toLowerCase());

        const mockFirstLetter = jest.spyOn(math, 'firstLetter');
        mockFirstLetter.mockImplementation((str) => str.slice(-1));

        const mockConcat = jest.spyOn(math, 'concat');
        mockConcat.mockImplementation((str1, str2, str3) => str1 + str2 + str3);

        mockUpperCase('a');
        mockFirstLetter('a');
        mockConcat('a', 'b', 'c');

        expect(mockUpperCase).toHaveBeenCalled();
        expect(mockFirstLetter).toHaveBeenCalled();
        expect(mockConcat).toHaveBeenCalled();
        expect(mockUpperCase).toHaveBeenCalledTimes(1);
        expect(mockFirstLetter).toHaveBeenCalledTimes(1);
        expect(mockConcat).toHaveBeenCalledTimes(1);
        expect(mockUpperCase('TesT')).toBe('test');
        expect(mockFirstLetter('Test')).toBe('t');
        expect(mockConcat('first', ' second ', 'third')).toBe('first second third');

        math.upperCase.mockRestore();
        math.firstLetter.mockRestore();
        math.concat.mockRestore();

        expect(math.upperCase('TesT')).toBe('TEST');
        expect(math.firstLetter('Test')).toBe('T');
        expect(math.concat('first', ' second')).toBe('first second');
    });
});