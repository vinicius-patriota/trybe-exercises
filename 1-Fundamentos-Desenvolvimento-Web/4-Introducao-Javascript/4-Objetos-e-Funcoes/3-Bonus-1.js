//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. 

let numeraisRomanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,

    IV: 4,
    IX: 9,
    IL: 49,
    IC: 99,
    ID: 499,
    IM: 999,
    VX: 5,
    VL: 45,
    VC: 95,
    VD: 495,
    VM: 995,
    XL: 40,
    XC: 90,
    XD: 490,
    XM: 990,
    LC: 50,
    LD: 450,
    LM: 950,
    CD: 400,
    CM: 900,
    DM: 500
};

let arr = ['C', 'M', 'C', 'M', 'C', 'C', 'C', 'X', 'I', 'I'];

let soma = 0;
let combinacao = "";

for (let i = 0; i < (arr.length); i += 1) {
    if ((arr[i] == "I" && arr[i + 1] == "V") ||
        (arr[i] == "I" && arr[i + 1] == "X") ||
        (arr[i] == "I" && arr[i + 1] == "L") ||
        (arr[i] == "I" && arr[i + 1] == "C") ||
        (arr[i] == "I" && arr[i + 1] == "D") ||
        (arr[i] == "I" && arr[i + 1] == "M") ||
        (arr[i] == "V" && arr[i + 1] == "X") ||
        (arr[i] == "V" && arr[i + 1] == "L") ||
        (arr[i] == "V" && arr[i + 1] == "C") ||
        (arr[i] == "V" && arr[i + 1] == "D") ||
        (arr[i] == "V" && arr[i + 1] == "M") ||
        (arr[i] == "X" && arr[i + 1] == "L") ||
        (arr[i] == "X" && arr[i + 1] == "C") ||
        (arr[i] == "X" && arr[i + 1] == "D") ||
        (arr[i] == "X" && arr[i + 1] == "M") ||
        (arr[i] == "L" && arr[i + 1] == "C") ||
        (arr[i] == "L" && arr[i + 1] == "D") ||
        (arr[i] == "L" && arr[i + 1] == "M") ||
        (arr[i] == "C" && arr[i + 1] == "D") ||
        (arr[i] == "C" && arr[i + 1] == "M") ||
        (arr[i] == "D" && arr[i + 1] == "M")) {

        combinacao = arr[i] + arr[i + 1];

        soma += numeraisRomanos[combinacao];

        i += 1;
    }
    else {
        soma += numeraisRomanos[arr[i]];
    };
};

console.log(soma);