function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';

    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const messagesEl = document.getElementById('messages');

    sendBtn.addEventListener('click', () => {
        const [authorEl, messageEl] = document.querySelectorAll('input[type=text]');

       fetch(BASE_URL, {
           method: 'POST',
           body: JSON.stringify({
               author: authorEl.value,
               content: messageEl.value,
           }),
       }).then(response => response.json())
        .then(data => console.log(data))
    });

    refreshBtn.addEventListener('click', () => {

        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => displayMessages(data))
    });

    function displayMessages(data) {
        Object.values(data).forEach((msg) => {
            console.log(msg);
            messagesEl.textContent += `${msg.author}: ${msg.content}\n`;
        });
    }
}

attachEvents();