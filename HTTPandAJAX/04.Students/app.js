function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/students';

    const submitBtnEl = document.getElementById('submit');
    const tableBodyEL = document.querySelector('#results tbody');

    const firstNameEl = document.querySelector('input[name="firstName"]');
    const lastNameEl = document.querySelector('input[name="lastName"]');
    const facultyNumberEl = document.querySelector('input[name="facultyNumber"]');
    const gradeEl = document.querySelector('input[name="grade"]');

    submitBtnEl.addEventListener('click', createStudent)

    function createStudent() {
        if (firstNameEl.value && lastNameEl.value && facultyNumberEl.value && gradeEl.value) {
            let firstName = firstNameEl.value.trim();
            let lastName = lastNameEl.value.trim();
            let facultyNumber = facultyNumberEl.value.trim();
            let grade = gradeEl.value.trim();


            fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    facultyNumber,
                    grade,
                })
            })
                .then(response => response.json())
                .then(() => {
                    firstNameEl.value = '';
                    lastNameEl.value = '';
                    facultyNumberEl.value = '';
                    gradeEl.value = '';

                    fetchStudents();
                })
        }
    }

    function fetchStudents() {
        tableBodyEL.innerHTML = '';
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach((student) => {
                    appendStudent(student);
                });
            })
    }

    function appendStudent(student) {
        const trElement = document.createElement('tr');

        Object.keys(student)
            .filter((key) => key !== '_id')
            .forEach((key) => {
                const tdElement = document.createElement('td');
                tdElement.textContent = student[key];

                trElement.appendChild(tdElement);
            });

        tableBodyEL.appendChild(trElement);
    }

    fetchStudents();
}

attachEvents();