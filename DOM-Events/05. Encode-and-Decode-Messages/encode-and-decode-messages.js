document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodeFormEl = document.querySelector('#encode');
    const decodeFormEl = document.querySelector('#decode');

    encodeFormEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const textEl = e.target.querySelector('textarea');
        const message = textEl.value;
        const encodedMessage = message.split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1));

        decodeFormEl.querySelector('textarea').value = encodedMessage.join('');
        textEl.value = '';
    });

    decodeFormEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const decodedMessage = decodeFormEl.querySelector('textarea').value;
        const encodedMessage = decodedMessage.split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) - 1));

        e.target.querySelector('textarea').value = encodedMessage.join('');
    });
}