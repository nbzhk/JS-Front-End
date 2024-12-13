function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/appointments/';

    const loadAppointmentsButton = document.getElementById('load-appointments');
    const appointmentsListElement = document.getElementById('appointments-list');
    const inputCarModelElement = document.getElementById('car-model');
    const dateInputElement = document.getElementById('date');
    const serviceInputElement = document.getElementById('car-service');
    const addAppointmentButton = document.getElementById('add-appointment');
    const editAppointmentButton = document.getElementById('edit-appointment');
    const formElement = document.querySelector('#form form');

    async function editAppointment() {
        const model = inputCarModelElement.value;
        const date = dateInputElement.value;
        const service = serviceInputElement.value;

        const _id = formElement.getAttribute('data-appointment-id');

        clearInputs();

        await fetch(`${BASE_URL}${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model,
                date,
                service,
            })
        })

        editAppointmentButton.setAttribute('disabled', 'disabled');

        addAppointmentButton.removeAttribute('disabled');

        await loadAppointments();
    }

    async function addAppointment() {

        const model = inputCarModelElement.value;
        const date = dateInputElement.value;
        const service = serviceInputElement.value;

        await clearInputs();

        await fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model,
                date,
                service,
            }),
        })

        await loadAppointments();
    }

    function createAppointmentElement(appointment) {
        const h2Element = document.createElement('h2');
        h2Element.textContent = appointment.model;

        const h3DateElement = document.createElement('h3');
        h3DateElement.textContent = appointment.date;

        const h3ServiceElement = document.createElement('h3');
        h3ServiceElement.textContent = appointment.service;

        const changeButton = document.createElement('button');
        changeButton.classList.add('change-btn');
        changeButton.textContent = 'Change';

        changeButton.addEventListener('click', () => {
            formElement.setAttribute('data-appointment-id', appointment._id);

            inputCarModelElement.value = appointment.model;
            dateInputElement.value = appointment.date;
            serviceInputElement.value = appointment.service;

            addAppointmentButton.setAttribute('disabled', 'disabled');

            editAppointmentButton.removeAttribute('disabled');
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', async () => {
            await fetch(`${BASE_URL}${appointment._id}`, {
                method: 'DELETE',
            })

            await loadAppointments();
        });

        const divWrapperElement = document.createElement('div');
        divWrapperElement.classList.add('buttons-appointment');
        divWrapperElement.appendChild(changeButton);
        divWrapperElement.appendChild(deleteButton);

        const liElement = document.createElement('li');
        liElement.classList.add('appointment');

        liElement.appendChild(h2Element);
        liElement.appendChild(h3DateElement);
        liElement.appendChild(h3ServiceElement);
        liElement.appendChild(divWrapperElement);

        return liElement;
    }

    async function loadAppointments() {
        fetch(`${BASE_URL}`)
        .then(response => response.json())
        .then(data => {

            Object.values(data).forEach((appointment) => {

                const liElement = createAppointmentElement(appointment);

                appointmentsListElement.appendChild(liElement);

            });
        });
    }

    function clearInputs() {
        inputCarModelElement.value = '';
        dateInputElement.value = '';
        serviceInputElement.value = '';
    }

    loadAppointmentsButton.addEventListener('click', loadAppointments);
    addAppointmentButton.addEventListener('click', addAppointment);
    editAppointmentButton.addEventListener('click', editAppointment);
}

solve();