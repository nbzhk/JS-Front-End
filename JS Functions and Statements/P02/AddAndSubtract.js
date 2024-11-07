function addAndSubstract(a, b, c) {
    const total = sum(a, b);

    const result = substract(total, c);

    console.log(result);
    
}

function sum(a, b) {
    return a + b;
}

function substract(sum, c) {
    return sum - c;
}

addAndSubstract(23, 6, 10);