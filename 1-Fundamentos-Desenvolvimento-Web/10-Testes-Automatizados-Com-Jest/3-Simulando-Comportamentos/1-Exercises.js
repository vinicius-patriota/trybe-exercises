function random() {
    return Math.round(Math.random() * 100);
};

function upperCase(str) {
    return str.toUpperCase();
};

function firstLetter(str) {
    return str[0];
};

function concat(str1, str2) {
    return str1 + str2;
};

module.exports = {
    random,
    upperCase,
    firstLetter,
    concat,
}