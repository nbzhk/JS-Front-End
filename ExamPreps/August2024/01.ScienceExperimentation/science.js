function science(input) {

    const n = Number(input.shift());

    const chemicals = {};
    const formulas = {};

    for (let i = 0; i < n; i++) {
        const [name, quantity] = input.shift().split(' # ');

        chemicals[name] = Number(quantity);
    }

    let commandArr = input.shift().split(' # ');

    while (commandArr[0] !== 'End') {

        const command = commandArr[0];
        let amount = 0;

        switch (command) {
            case 'Mix':
                const firstChemical = commandArr[1];
                const secondChemical = commandArr[2];

                const firstAmount = chemicals[firstChemical];
                const secondAmount = chemicals[secondChemical];

                amount = Number(commandArr[3]);

                if (firstAmount - amount < 0 || secondAmount - amount < 0) {

                    console.log(`Insufficient quantity of ${firstChemical}/${secondChemical} to mix.`);

                } else {
                    chemicals[firstChemical] -= amount;
                    chemicals[secondChemical] -= amount;

                    console.log(`${firstChemical} and ${secondChemical} have been mixed. ${amount} units of each were used.`)
                }

                break;
            case 'Replenish':
                const searchedChemical = commandArr[1];
                amount = Number(commandArr[2]);

                if (!chemicals[searchedChemical]) {
                    console.log(`The Chemical ${searchedChemical} is not available in the lab.`)
                } else if (chemicals[searchedChemical] + amount > 500) {
                    const addedUnits = 500 - chemicals[searchedChemical];
                    chemicals[searchedChemical] = 500;

                    console.log(`${searchedChemical} quantity increased by ${addedUnits} units, reaching maximum capacity of 500 units!`)
                } else {
                    chemicals[searchedChemical] += amount;

                    console.log(`${searchedChemical} quantity increased by ${amount} units!`);
                }

                break;
            case 'Add Formula':
                const chemical = commandArr[1];
                const formula = commandArr[2];

                if (chemicals[chemical]) {
                    formulas[chemical] = formula;

                    console.log(`${chemical} has been assigned the formula ${formula}.`);
                } else {
                    console.log(`The Chemical ${chemical} is not available in the lab.`)
                }

                break;
        }

        commandArr = input.shift().split(' # ');
    }

    for (const chemical in chemicals) {
        if (formulas[chemical]) {
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical]}, Formula: ${formulas[chemical]}`);
        } else {
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical]}`);
        }
    }
}

/* science(
    ['4',
        'Water # 200',
        'Salt # 100',
        'Acid # 50',
        'Base # 80',
        'Mix # Water # Salt # 50',
        'Replenish # Salt # 150',
        'Add Formula # Acid # H2SO4',
        'End']
); */

science(
    [ '3',
        'Sodium # 300',
        'Chlorine # 100',
        'Hydrogen # 200',
        'Mix # Sodium # Chlorine # 200',
        'Replenish # Sodium # 250',
        'Add Formula # Sulfuric Acid # H2SO4',
        'Add Formula # Sodium # Na',
        'Mix # Hydrogen # Chlorine # 50',
        'End']
);