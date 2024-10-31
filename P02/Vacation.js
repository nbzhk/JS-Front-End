function solve (numberOfPeople, typeGroup, day) {

    const studentFriday = 8.45;
    const studentSaturday = 9.8;
    const studentSunday = 10.46;

    const businessFriday = 10.9;
    const businessSaturday = 15.6;
    const businessSunday = 16;

    const regularFriday = 15;
    const regularSaturday = 20;
    const regularSunday = 22.5;

    let totalPrice;

    switch (typeGroup) {
        case 'Students':
            if (day === 'Friday') {
                totalPrice = numberOfPeople * studentFriday;
            } else if(day === 'Saturday') {
                totalPrice = numberOfPeople * studentSaturday;
            } else if (day === 'Sunday') {
                totalPrice = numberOfPeople * studentSunday;
            }

            if (numberOfPeople >= 30) {
                totalPrice *= 0.85;
            }
            break;
        case 'Business':
            if(numberOfPeople >= 100) {
                numberOfPeople -= 10;
            }

            if (day === 'Friday') {
                totalPrice = numberOfPeople * businessFriday;
            } else if(day === 'Saturday') {
                totalPrice = numberOfPeople * businessSaturday;
            } else if (day === 'Sunday') {
                totalPrice = numberOfPeople * businessSunday;
            }
            break;
        case 'Regular':
            if (day === 'Friday') {
                totalPrice = numberOfPeople * regularFriday;
            } else if(day === 'Saturday') {
                totalPrice = numberOfPeople * regularSaturday;
            } else if (day === 'Sunday') {
                totalPrice = numberOfPeople * regularSunday;
            }

            if(numberOfPeople >= 10 && numberOfPeople <= 20) {
                totalPrice *= 0.95;
            }
            break;
        
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

solve(30,
    "Students",
    "Sunday");

solve(40,
    "Regular",
    "Saturday")