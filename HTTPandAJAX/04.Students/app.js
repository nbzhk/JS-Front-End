function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

    const submitBtnEl = document.getElementById('submit');
    const tableEL = document.querySelector('#results tbody');

    const firstNameEl = document.querySelector('input[name="firstName"]');
    const lastNameEl = document.querySelector('input[name="lastName"]');
    const facultyNumberEl = document.querySelector('input[name="facultyNumber"]');
    const gradeEl = document.querySelector('input[name="grade"]');

    const students = [];

    submitBtnEl.addEventListener('click', createStudent)

    function createStudent() {
        if (firstNameEl.value && lastNameEl.value && facultyNumberEl.value && gradeEl.value) {
            let firstName = firstNameEl.value.trim();
            let lastName = lastNameEl.value.trim();
            let facultyNumber = facultyNumberEl.value.trim();
            let grade = gradeEl.value.trim();

            const newStudent = {
                firstName: firstName,
                lastName: lastName,
                facultyNumber: facultyNumber,
                grade: grade,
            }

            students.push(newStudent);

            firstNameEl.value = '';
            lastNameEl.value = '';
            facultyNumberEl.value = '';
            gradeEl.value = '';

            load()
        }
    }

    document.addEventListener('DOMContentLoaded', extractStudents);

    function extractStudents() {

        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach((student) => {
                    students.push(student);
                });
            })
    }


    function load() {
        students.forEach(student => {
            const rowElement = document.createElement('tr');
            const firstNameCell = document.createElement('td');
            const lastNameCell = document.createElement('td');
            const facultyCell = document.createElement('td');
            const gradeCell = document.createElement('td');

            firstNameCell.textContent = student.firstName;
            lastNameCell.textContent = student.lastName;
            facultyCell.textContent = student.facultyNumber;
            gradeCell.textContent = student.grade;

            rowElement.appendChild(firstNameCell);
            rowElement.appendChild(lastNameCell);
            rowElement.appendChild(facultyCell);
            rowElement.appendChild(gradeCell);

            console.log(rowElement)

            tableEL.appendChild(rowElement);
        })
    }

}

attachEvents();