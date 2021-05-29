const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. 

const modifica = (obj, key, value) => obj[key] = value;

modifica(lesson2, 'turno', 'manhã');

console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. 

const listaKeys = (obj) => Object.keys(obj);

console.log(listaKeys(lesson2));

// Crie uma função para mostrar o tamanho de um objeto. 

const tamanho = (obj) => Object.entries(obj).length;

console.log(tamanho(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 

const listaValues = (obj) => Object.values(obj);

console.log(listaValues(lesson2));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3

const allLessons = {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
}

console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudantes = (obj) => {
    let total = 0;
    for (index in obj) {
        total += obj[index].numeroEstudantes;
    }
    return total;
}

console.log(totalEstudantes(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (obj, pos) => Object.values(obj)[pos];

console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (obj, key, value) => {
    const pares = Object.entries(obj);
    const par = [key, value];
    for (index in pares) {
        if (pares[index][0] === par[0] && pares[index][1] === par[1]) return true;
    }
    return false;
}

console.log(verifyPair(lesson1, 'materia', 'Matemática'));


