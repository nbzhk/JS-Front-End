function solve(input) {
    
    const n = Number(input.shift());

    const farmers = {};

    for (let i = 0; i < n; i++) {
        const data = input.shift().split(' ');
        const farmerName = data[0];
        const workingArea = data[1];
        const tasks = data[2].split(',');

        farmers[farmerName] = {
            workingArea: workingArea,
            tasks: tasks,
        };
    }



    let commandData = input.shift().split(' / ');

    while (commandData[0] !== 'End') {

        const currentFarmer = commandData[1];

        switch (commandData[0]) {
            case 'Execute':
                const workingArea = commandData[2];
                const task = commandData[3];

                if (farmers[currentFarmer].workingArea === workingArea  &&
                    farmers[currentFarmer].tasks.includes(task)) {

                    console.log(`${currentFarmer} has executed the task: ${task}!`)
                } else {

                    console.log(`${currentFarmer} cannot execute the task: ${task}.`)
                }
                break;
            case 'Change Area':
                const newArea = commandData[2];

                farmers[currentFarmer].workingArea = newArea;

                console.log(`${currentFarmer} has changed their work area to: ${newArea}`)

                break;
            case 'Learn Task':
                const newTask = commandData[2];

                if (farmers[currentFarmer].tasks.includes(newTask)) {
                    console.log(`${currentFarmer} already knows how to perform ${newTask}.`)
                } else {
                    farmers[currentFarmer].tasks.push(newTask);

                    console.log(`${currentFarmer} has learned a new task: ${newTask}.`)
                }

                break;
        }

        commandData = input.shift().split(' / ');
    }

    for (const farmer in farmers) {
        const sortedTasks = farmers[farmer].tasks.sort();

        console.log(`Farmer: ${farmer}, Area: ${farmers[farmer].workingArea}, Tasks: ${sortedTasks.join(', ')}`);
    }

}

solve(
    [
        "3",
        "Alex apiary harvesting,honeycomb",
        "Emma barn milking,cleaning",
        "Chris garden planting,weeding",
        "Execute / Alex / apiary / harvesting",
        "Learn Task / Alex / beeswax",
        "Execute / Alex / apiary / beeswax",
        "Change Area / Emma / apiary",
        "Execute / Emma / apiary / milking",
        "Execute / Chris / garden / watering",
        "Learn Task / Chris / pruning",
        "Execute / Chris / garden / pruning",
        "End"
    ]

)
