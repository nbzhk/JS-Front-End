function parkingLot(input) {

    const parking = {}

    input.forEach(command => {
        const commandData = command.split(', ');

        if (commandData[0] === 'IN') {
            if (!parking.hasOwnProperty(commandData[1])) parking[commandData[1]] = 1;
        } else {
            if (parking.hasOwnProperty(commandData[1])) delete parking[commandData[1]];
        }
    });

    if (Object.keys(parking).length > 0) {
        Object.entries(parking)
            .sort()
            .forEach(([carNumber]) => {
                if (parking)console.log(carNumber);
            });
    } else {
        console.log('Parking Lot is Empty');
    }

}

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

console.log('....................................')

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);