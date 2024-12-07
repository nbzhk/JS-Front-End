function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';

    const loadBtnEl = document.getElementById('btnLoad');
    const phoneBookEl = document.getElementById('phonebook');
    const createBtnEl = document.getElementById('btnCreate');


    loadBtnEl.addEventListener('click', load);
    function load() {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                phoneBookEl.innerHTML = '';

                Object.values(data).forEach((entity) => {
                    const liElement = document.createElement('li');
                    liElement.textContent = `${entity.person}: ${entity.phone}`;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';

                    liElement.appendChild(deleteButton);

                    deleteButton.addEventListener('click', () => deleteEntity(entity._id));

                    phoneBookEl.appendChild(liElement);
                });
            });
    }


    function deleteEntity(id) {

        fetch(BASE_URL + `/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
    }

    createBtnEl.addEventListener('click', create);

    function create() {
        const personEl = document.getElementById('person');
        const phoneEl = document.getElementById('phone');

        fetch(BASE_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                person: personEl.value,
                phone: phoneEl.value,
            }),
        }).then(response => {
            personEl.value = '';
            phoneEl.value = '';

            load();
        })
    }
}

attachEvents();