function sortingNumbers(arr) {
    const sorted = arr.sort((a,b) => a - b);

    const result = [];

    let i = 0;
    let j = sorted.length - 1;

    while(i <= j) {
        if(i === j) {
            result.push(sorted[i]);
        } else {
            result.push(sorted[i]);
            result.push(sorted[j]);
        }

        i++;
        j--;
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, 18, 56]);