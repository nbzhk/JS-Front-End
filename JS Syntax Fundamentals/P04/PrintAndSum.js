function solve(start, end) {
    let sum = 0;
    let print = '';

    for (let index = start; index <= end; index++) {
        sum += index;
        print += index + ' ';
    
    }

    console.log(print);
    console.log("Sum: " + sum);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);