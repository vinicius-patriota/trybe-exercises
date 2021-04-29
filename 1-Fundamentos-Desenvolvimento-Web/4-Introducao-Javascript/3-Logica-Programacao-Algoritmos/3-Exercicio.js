// Agora inverta o lado do triângulo.

const n = 5;
let aux = "";

for (let i = 0; i < n; i += 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
        if (j > i) {
            aux += " ";
        }
        else {
            aux += "*";
        };
    };
    console.log(aux);
    aux = "";
};