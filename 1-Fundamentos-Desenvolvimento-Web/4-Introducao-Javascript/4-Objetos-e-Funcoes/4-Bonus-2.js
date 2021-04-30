let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers (vector) {
    let pares = [];

    for (let i of vector) {
        for (let j of i) {
            if (j % 2 === 0) {
                pares.push(j);
            };
        };
    };

    return pares;
};