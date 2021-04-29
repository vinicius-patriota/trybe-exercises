// Faça uma pirâmide com n asteriscos de base.

const n = 5;
let aux = "";
let p = 0;

if ((n % 2) === 0) {
    p = 1;
};

for (let i = p; i < n; i += 2) {
    for (let j = 0; j < n; j += 1) {
        if (j <= i) {
            aux += "*";
        }
        else {
            aux = " " + aux + " ";
            j += 1;
        };
    };
    console.log(aux);
    aux = "";
};