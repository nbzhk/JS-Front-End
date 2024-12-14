function solve() {

    const BASE_URL = 'http://localhost:3030/jsonstore/matches'

    const loadMatchesBtn = document.getElementById('load-matches')
    const matchesListEl = document.getElementById('list');
    const addMatchBtn = document.getElementById('add-match');
    const editMatchBtn = document.getElementById('edit-match');
    const hostEl = document.getElementById('host');
    const scoreEl = document.getElementById('score');
    const guestEl = document.getElementById('guest');
    const formEl = document.querySelector('#form form');

    async function editMatch() {
        const currentId = formEl.getAttribute('data-match-id');

        const host = hostEl.value;
        const score = scoreEl.value;
        const guest = guestEl.value;

        clearInputs()

        await fetch(`${BASE_URL}/${currentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                host,
                score,
                guest,
            }),
        })

        await loadAllMatches();

        editMatchBtn.setAttribute('disabled', 'disabled');

        addMatchBtn.removeAttribute('disabled');
    }

    async function addMatch() {
        const host = hostEl.value;
        const score = scoreEl.value;
        const guest = guestEl.value;

        clearInputs()

        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                host,
                score,
                guest,
            }),
        })

        await loadAllMatches();

    }

    function createMatchElement(match) {
        const pHostEl = document.createElement('p');
        pHostEl.textContent = match.host;

        const pScoreEl = document.createElement('p');
        pScoreEl.textContent = match.score;

        const pGuestEl = document.createElement('p');
        pGuestEl.textContent = match.guest;

        const divInfoEl = document.createElement('div');
        divInfoEl.className = 'info';
        divInfoEl.appendChild(pHostEl);
        divInfoEl.appendChild(pScoreEl);
        divInfoEl.appendChild(pGuestEl);

        const changeBtnEl = document.createElement('button');
        changeBtnEl.className = 'change-btn';
        changeBtnEl.textContent = 'Change';

        changeBtnEl.addEventListener('click', () => {
            formEl.setAttribute('data-match-id', match._id);

            hostEl.value = match.host;
            scoreEl.value = match.score;
            guestEl.value = match.guest;

            addMatchBtn.setAttribute('disabled', 'disabled');

            editMatchBtn.removeAttribute('disabled');

        });

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.className = 'delete-btn';
        deleteBtnEl.textContent = 'Delete';

        deleteBtnEl.addEventListener('click', async () => {

            await fetch(`${BASE_URL}/${match._id}`, {
                method: 'DELETE',
            })

            await loadAllMatches();
        });

        const buttonsWrapEl = document.createElement('div');
        buttonsWrapEl.className = 'btn-wrapper';
        buttonsWrapEl.appendChild(changeBtnEl);
        buttonsWrapEl.appendChild(deleteBtnEl);

        const liElement = document.createElement('li');
        liElement.className = 'match';
        liElement.appendChild(divInfoEl);
        liElement.appendChild(buttonsWrapEl);

        return liElement;

    }

    async function loadAllMatches() {
        matchesListEl.innerHTML = '';

        await fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach((match) => {
                    console.log(match);
                    const matchLiElement = createMatchElement(match);

                    matchesListEl.appendChild(matchLiElement);
                })

            });
    }

    function clearInputs() {
        hostEl.value = '';
        scoreEl.value = '';
        guestEl.value = '';
    }

    loadMatchesBtn.addEventListener('click', loadAllMatches);
    addMatchBtn.addEventListener('click', addMatch);
    editMatchBtn.addEventListener('click', editMatch);

}

solve();