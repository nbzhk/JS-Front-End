function sameNumbers(num) {

    const numArr = num.toString();
    let same = true;
    let sum = 0;

    for (let i = 1; i < numArr.length; i++) {

        const lastDigit = Number(numArr[i - 1]);
        const currentDigit = Number(numArr[i]);

        if (currentDigit !== lastDigit) {
            same = false;
        }
        
        sum += currentDigit;
    }

    sum += Number(numArr[0]);

    console.log(same);
    console.log(sum);
}


sameNumbers(2222222);
sameNumbers(1234);