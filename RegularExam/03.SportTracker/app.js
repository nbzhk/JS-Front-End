function solve() {

    const BASE_URL = 'http://localhost:3030/jsonstore/workout';

    const loadBtnEl = document.getElementById('load-workout');
    const workoutsListEl = document.getElementById('list');
    const addBtnEl = document.getElementById('add-workout');
    const editBtnEl = document.getElementById('edit-workout');
    const inputWorkoutEl = document.getElementById('workout');
    const inputDateEl = document.getElementById('date');
    const inputLocationEl = document.getElementById('location');
    const formEl = document.querySelector('#form form');

    async function editWorkout() {
        const currentId = formEl.getAttribute('data-workout-id');

        const workout = inputWorkoutEl.value;
        const date = inputDateEl.value;
        const location = inputLocationEl.value;

        clearInputs();

        await fetch(`${BASE_URL}/${currentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                workout,
                date,
                location,
            }),
        })

        await loadWorkouts();

        editBtnEl.setAttribute('disabled', 'disabled');

        addBtnEl.removeAttribute('disabled');
    }

    async function addWorkout() {
        const workout = inputWorkoutEl.value;
        const date = inputDateEl.value;
        const location = inputLocationEl.value;

        clearInputs()

        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                workout,
                date,
                location,
            }),
        });


        await loadWorkouts();

    }

    function createWorkoutEl(workout) {

        const h2El = document.createElement('h2');
        h2El.textContent = workout.workout;

        const h3DateEl = document.createElement('h3');
        h3DateEl.textContent = workout.date;

        const h3LocationEl = document.createElement('h3');
        h3LocationEl.textContent = workout.location;

        const changeBtnEl = document.createElement('button');
        changeBtnEl.textContent = 'Change';
        changeBtnEl.className = 'change-btn';
        changeBtnEl.setAttribute('id', workout._id);

        changeBtnEl.addEventListener('click', () => {
            formEl.setAttribute('data-workout-id', workout._id);

            inputWorkoutEl.value = workout.workout;
            inputDateEl.value = workout.date;
            inputLocationEl.value = workout.location;

            addBtnEl.setAttribute('disabled', 'disabled');

            editBtnEl.removeAttribute('disabled');
        });

        const doneBtnEl = document.createElement('button');
        doneBtnEl.textContent = 'Done';
        doneBtnEl.className = 'delete-btn';

        doneBtnEl.addEventListener('click', async () => {

            await fetch(`${BASE_URL}/${workout._id}`, {
                method: 'DELETE',
            })

            await loadWorkouts();
        });

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';
        buttonsContainer.appendChild(changeBtnEl);
        buttonsContainer.appendChild(doneBtnEl);

        const divContainer = document.createElement('div');
        divContainer.className = 'container';
        divContainer.appendChild(h2El);
        divContainer.appendChild(h3DateEl);
        divContainer.appendChild(h3LocationEl);
        divContainer.appendChild(buttonsContainer);

        return divContainer;
    }

    async function loadWorkouts() {
        workoutsListEl.innerHTML = '';

        await fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
               Object.values(data).forEach((workout) => {
                   const divElement = createWorkoutEl(workout);

                   workoutsListEl.appendChild(divElement);
               })
            });
    }

    function clearInputs() {
        inputWorkoutEl.value = '';
        inputDateEl.value = '';
        inputLocationEl.value = '';
    }

    loadBtnEl.addEventListener('click', loadWorkouts);
    addBtnEl.addEventListener('click', addWorkout);
    editBtnEl.addEventListener('click', editWorkout);
}

solve();