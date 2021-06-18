const test = require('./1-Exercicio');

// Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. 

describe('Exercicio 1 - Funcao uppercase', () => {
    it('should return all letters as uppercase', done => {
        test.uppercase('qwerty', (result) => {
            expect(result).toBe('QWERTY');
            done();
        });
    });
    it('should return all letters as uppercase', done => {
        test.uppercase('QwErTy', (result) => {
            expect(result).toBe('QWERTY');
            done();
        });
    });
});

// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado. 

describe('Exercicio 2 - Funcao getUserName (Promise)', () => {
    it('should find user', () => {
        expect.assertions(1);
        return test.getUserName(4).then((user) => {
            expect(user).toBe('Mark');
        });
    });
    it('should not find user', () => {
        expect.assertions(1);
        return test.getUserName(3).catch((error) => {
            expect(error).toEqual({ error: 'User with ' + 3 + ' not found.' });
        });
    });
});

// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await. 

describe('Exercicio 3 - Funcao getUserName (async/await)', () => {
    it('should find user', async () => {
        const user = await test.getUserName(4);
        expect(user).toBe('Mark');
    });
    it('should not find user', async () => {
        try {
            await test.getUserName(3);
        } catch (error) {
            expect(error).toEqual({ error: 'User with ' + 3 + ' not found.' });
        }
    });
});

// O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista. 

describe('Exercicio 4 - Funcao getRepos', () => {
    it('gets a list of repositories names', () => {
        const url = 'https://api.github.com/orgs/tryber/repos';

        return test.getRepos(url).then(result => {
            expect(result).toContain('sd-01-week4-5-project-todo-list');
            expect(result).toContain('sd-01-week4-5-project-meme-generator');
        });
    });
});