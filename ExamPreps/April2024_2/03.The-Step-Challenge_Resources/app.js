function solve() {

    const BASE_URL = 'http://localhost:3030/jsonstore/records/';

    const loadRecordsButtonEl = document.getElementById('load-records');
    const ulListEl = document.getElementById('list');
    const addButtonEl = document.getElementById('add-record');
    const nameElement = document.querySelector('input[name="p-name"]');
    const stepsElement = document.querySelector('input[name="steps"]');
    const caloriesElement = document.querySelector('input[name="calories"]');
    const editButtonEl = document.getElementById('edit-record');
    const formEl = document.querySelector('#form form');

    async function editRecord() {
        const id = formEl.getAttribute('data-record-id');
        console.log(id)

        const name = nameElement.value;
        const steps = stepsElement.value;
        const calories = caloriesElement.value;

        nameElement.value = '';
        stepsElement.value = '';
        caloriesElement.value = '';

        await fetch(`${BASE_URL}${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                steps,
                calories,
                _id: id
            })
        });

        await getAllRecords();

        editButtonEl.setAttribute('disabled', 'disabled');

        addButtonEl.removeAttribute('disabled');

        formEl.removeAttribute('data-record-id');
    }


    async function addRecord() {
        const name = nameElement.value;
        const steps = stepsElement.value;
        const calories = caloriesElement.value;

        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                calories,
                steps,
            })
        })

        await getAllRecords();

        nameElement.value = '';
        stepsElement.value = '';
        caloriesElement.value = '';
    }

    function createRecord(name, steps, calories, recordID) {

        const pNameEl = document.createElement('p');
        pNameEl.textContent = name;

        const pStepsEl = document.createElement('p');
        pStepsEl.textContent = steps;

        const pCaloriesEl = document.createElement('p');
        pCaloriesEl.textContent = calories;

        const divInfoEl = document.createElement('div');
        divInfoEl.classList.add('info');

        divInfoEl.appendChild(pNameEl);
        divInfoEl.appendChild(pStepsEl);
        divInfoEl.appendChild(pCaloriesEl);

        const changeBtnEl = document.createElement('button');
        changeBtnEl.classList.add('change-btn');
        changeBtnEl.textContent = 'Change';

        changeBtnEl.addEventListener('click', () => {
            nameElement.value = name;
            stepsElement.value = steps;
            caloriesElement.value = calories;

            editButtonEl.removeAttribute('disabled');

            addButtonEl.setAttribute('disabled', 'disabled');

            formEl.setAttribute('data-record-id', recordID);

        });

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.classList.add('delete-btn');
        deleteBtnEl.textContent = 'Delete';

        deleteBtnEl.addEventListener('click', async () => {
            await fetch(`${BASE_URL}${recordID}`, {
                method: 'DELETE',
            });

            await getAllRecords();
        })

        const buttonsWrapperEl = document.createElement('div');
        buttonsWrapperEl.classList.add('btn-wrapper');

        buttonsWrapperEl.appendChild(changeBtnEl);
        buttonsWrapperEl.appendChild(deleteBtnEl);

        const liElement = document.createElement('li');
        liElement.classList.add('record');

        liElement.appendChild(divInfoEl);
        liElement.appendChild(buttonsWrapperEl);

        ulListEl.appendChild(liElement);

    }

    function getAllRecords() {
        ulListEl.innerHTML = '';

        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {

                Object.values(data).forEach((record) => {
                    createRecord(record.name, record.steps, record.calories, record._id);
                });
            });
    }

    loadRecordsButtonEl.addEventListener('click', getAllRecords);
    addButtonEl.addEventListener('click', addRecord);
    editButtonEl.addEventListener('click', editRecord);
}

solve();