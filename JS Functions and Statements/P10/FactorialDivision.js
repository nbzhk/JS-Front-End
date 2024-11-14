function factorialDivision(a, b) {

    const calculateFactorial =  (num) => {
        if(num == 0 || num == 1) {
            return 1;
        } else {
            return num * calculateFactorial(num - 1);
        }
    }

    let factorialA = calculateFactorial(a);
    let factorialB = calculateFactorial(b);

    const result =  factorialA / factorialB;

    console.log(result.toFixed(2));
    
}

factorialDivision(5, 2);