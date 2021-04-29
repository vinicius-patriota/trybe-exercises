const n = 5;
let primo = true;

if (n < 2) {
    primo = false;
}
else {
    for (let i = 2; i < n; i += 1) {
        if (n % i == 0) {
            primo = false;
        };
    };
};

console.log(primo);