function superheroAlliance(input) {

    const n = Number(input.shift());

    const superheroes = {}

    for (let i = 0; i < n; i++) {
        const data = input.shift().split('-');
        const name = data[0];
        const superpowers = data[1].split(',');
        const energy = Number(data[2]);

        superheroes[name] = {
            superpowers: superpowers,
            energy: energy,
        };
    }

    let commandData = input.shift().split(' * ');

    while (commandData[0] !== 'Evil Defeated!') {

        const command = commandData[0];
        const name = commandData[1];

        switch (command) {
            case 'Use Power':
                const superpower = commandData[2];
                const energyRequired = Number(commandData[3]);

                if (superheroes[name].superpowers.includes(superpower) &&
                    superheroes[name].energy - energyRequired > 0) {

                    superheroes[name].energy -= energyRequired;

                    console.log(`${name} has used ${superpower} and now has ${superheroes[name].energy} energy!`)
                } else {

                    console.log(`${name} is unable to use ${superpower} or lacks energy!`)
                }
                break;
            case 'Train':
                const trainingEnergy = Number(commandData[2]);
                let currentEnergy = superheroes[name].energy;

                if (currentEnergy < 100) {

                    const newEnergy = currentEnergy + trainingEnergy > 100
                        ? 100
                        : currentEnergy + trainingEnergy;

                    const energyGained = Math.abs(newEnergy - currentEnergy);

                    superheroes[name].energy = newEnergy;

                    console.log(`${name} has trained and gained ${energyGained} energy!`);
                } else {
                    console.log(`${name} is already at full energy!`)
                }

                break;
            case 'Learn':
                const newSuperpower = commandData[2];

                if (superheroes[name].superpowers.includes(newSuperpower)) {
                    console.log(`${name} already knows ${newSuperpower}.`)
                } else {
                    superheroes[name].superpowers.push(newSuperpower);

                    console.log(`${name} has learned ${newSuperpower}!`)
                }

                break;
        }

        commandData = input.shift().split(' * ');
    }

    for (const superhero in superheroes) {
        console.log(
            `Superhero: ${superhero}\n- Superpowers: ${superheroes[superhero].superpowers.join(', ')}\n- Energy: ${superheroes[superhero].energy}`
        )
    }

}

superheroAlliance(
    [
        "2",
        "Iron Man-Repulsor Beams,Flight-20",
        "Thor-Lightning Strike,Hammer Throw-100",
        "Train * Thor * 20",
        "Use Power * Iron Man * Repulsor Beams * 30",
        "Evil Defeated!"
    ]
)