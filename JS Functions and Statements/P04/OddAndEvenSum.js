function oddAndEvenSum(number) {
    const numArr = number.toString().split('');

    let sumOdd = 0;
    let sumEven = 0;

    numArr.forEach(diggit => {
        
        if(diggit % 2 === 0) {
            sumEven += Number(diggit);
        } else {
            sumOdd += Number(diggit);
        }
    });

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    
}

oddAndEvenSum(1000435);