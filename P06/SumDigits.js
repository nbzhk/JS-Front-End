function sumDigits(num) {
    const stringDigits = num.toString();

    let sum = 0;

    for (let i = 0; i < stringDigits.length; i++) {

        sum += Number(stringDigits[i]);
    }

    console.log(sum);
    
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);