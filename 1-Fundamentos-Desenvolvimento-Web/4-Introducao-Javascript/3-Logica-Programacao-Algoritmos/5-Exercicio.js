const n = 15;
let aux = "";

for (let i = 0; i < n; i += 2) {
    for (let j = 0; j < n; j += 1) {
        if (j === i || j === 0 || i + 1 == n) {
            aux += "*";
        }
        else if (j > i) {
            aux = " " + aux + " ";
            j += 1;
        }
        else {
            aux += " ";
        };
    };
    console.log(aux);
    aux = "";
};