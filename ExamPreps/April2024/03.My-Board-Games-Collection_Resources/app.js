function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/games/';

    const gamesList = document.getElementById('games-list');
    const boardGameDiv = document.querySelector('.board-game');
    const loadBtn = document.getElementById('load-games');
    const addBtn = document.getElementById('add-game');
    const editBtn = document.getElementById('edit-game');
    const formElement = document.querySelector('#form form');

    const nameEl = document.querySelector('input[name="g-name"]');
    const typeEl = document.querySelector('input[name="type"]');
    const maxPlayersEl = document.querySelector('input[name=players]');

    addBtn.addEventListener('click', addGame);
    editBtn.addEventListener('click', editGame);
    loadBtn.addEventListener('click', getAllGames);

    async function editGame() {

        const _id = formElement.getAttribute('data-game-id');
        const name = nameEl.value;
        const type = typeEl.value;
        const players = maxPlayersEl.value;

        nameEl.value = '';
        typeEl.value = '';
        maxPlayersEl.value = '';

        await fetch(`${BASE_URL}/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, type, players, _id}),
        });

        await getAllGames();

        addBtn.disabled = false;
        editBtn.disabled = true;

        formElement.removeAttribute('data-game-id');

    }


    function addGame() {

        if (nameEl.value === '' || typeEl.value === '' || maxPlayersEl.value === '') {
            return;
        }

        const name = nameEl.value;
        const type = typeEl.value;
        const players = maxPlayersEl.value;

        nameEl.value = '';
        typeEl.value = '';
        maxPlayersEl.value = '';

        fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                type: type,
                players: players,
            })
        })
            .then(response => response.json())
            .then(() => {
                getAllGames()
            })
    }

    function getAllGames() {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {

                gamesList.innerHTML = '';
                Object.values(data).forEach((game) => {

                    console.log(game._id);

                    const clonedNode = boardGameDiv.cloneNode(true);
                    const changeBtn = clonedNode.querySelector('button[class="change-btn"]');
                    changeBtn.addEventListener('click', () => {

                        nameEl.value = game.name;
                        typeEl.value = game.type;
                        maxPlayersEl.value = game.players;

                        editBtn.disabled = false;
                        addBtn.disabled = true;

                        formElement.setAttribute('data-game-id', game._id);
                    });

                    const deleteBtn = clonedNode.querySelector('button[class="delete-btn"]');
                    deleteBtn.addEventListener('click', async () => {
                       await fetch(`${BASE_URL}/${game._id}`, {
                            method: 'DELETE',
                        })

                        await getAllGames();

                       formElement.removeAttribute('data-game-id');
                       editBtn.disabled = true;
                       addBtn.disabled = false;
                    })


                    clonedNode.querySelectorAll('p').forEach((pEl, index) => {
                        switch (index) {
                            case 0:
                                pEl.textContent = game.name;
                                break;
                            case 1:
                                pEl.textContent = game.players;
                                break;
                            case 2:
                                pEl.textContent = game.type;
                                break;
                        }

                        gamesList.appendChild(clonedNode);
                    });
                });
            })
            .then(() => boardGameDiv.remove());
    }

}

solve();