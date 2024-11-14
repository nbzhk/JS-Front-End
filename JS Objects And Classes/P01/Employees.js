// function employees(employeesArr) {

//     employeesArr.forEach(employee => {
//         console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
//     });

// }

// with object

function printEmployees(input) {
    const employees = {};

    input.forEach(employee => {
        employees[employee] = employee.length;
    });


    for (const name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }
   
}

printEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);



// employees([
//     'Silas Butler',
//     'Adnaan Buckley',
//     'Juan Peterson',
//     'Brendan Villarreal'
//     ]);

// employees([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
//     ]);