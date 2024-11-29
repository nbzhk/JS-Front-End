function solve() {
    const input = document.querySelector('#inputs textarea').value;


    const restaurantsData = JSON.parse(input)
        .reduce((acc, current) => {
            const [name, workers] = current.split(' - ');

            const workersData = workers.split(', ')
                .map(w => {
                    const [name, salary] = w.split(' ');

                    return {name, salary: Number(salary)};
                });

            if (!acc.hasOwnProperty(name)) {
                acc[name] = {
                    workersData: []
                };
            }

            acc[name].workersData.push(...workersData);

            return acc;

        }, {});

    console.log(restaurantsData);

    function getAvgSalary(restaurant) {
        const salariesSum = restaurant.workersData
            .reduce((salariesSum, w) => salariesSum + w.salary, 0);
        return salariesSum / restaurant.workersData.length;
    }

    const [bestRestaurant] = Object.keys(restaurantsData)
        .sort((a, b) => getAvgSalary(restaurantsData[b]) - getAvgSalary(restaurantsData[a]));

    const bestWorkers = restaurantsData[bestRestaurant].workersData
        .toSorted((a, b) => b.salary - a.salary);

    console.log(bestWorkers);

    const outputBestRestaurant = document.querySelector('#outputs #bestRestaurant p');

    outputBestRestaurant.textContent = `Name: ${bestRestaurant} `;
    outputBestRestaurant.textContent += `Average Salary: ${getAvgSalary(restaurantsData[bestRestaurant]).toFixed(2)} `;
    outputBestRestaurant.textContent += `Best Salary: ${bestWorkers[0].salary.toFixed(2)} `;

    const outputBestWorkersElement = document.querySelector('#outputs #workers p');

    outputBestWorkersElement.textContent = bestWorkers
        .map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
}