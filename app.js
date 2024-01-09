function fibs(num) {
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    return fibs(num - 1) + fibs(num - 2);
}

console.log(fibs(6));
console.log(fibs(10));