function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/games/';

    const gamesList = document.getElementById('games-list');
    const boardGameDiv = document.querySelector('.board-game');
    const loadBtn = document.getElementById('load-games');

    loadBtn.addEventListener('click', getAllGames);

    function getAllGames() {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {

                Object.values(data).forEach((game) => {
                    const clonedNode = boardGameDiv.cloneNode(true);

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