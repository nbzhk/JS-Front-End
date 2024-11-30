document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const input = document.querySelector('input[type="text"]').value.split(', ');
    const contentEl = document.getElementById('content');


    input.forEach((el) => {
        const pElement = document.createElement('p');
        const divElement = document.createElement('div');

        pElement.textContent = el;
        pElement.style.display = 'none';

        divElement.appendChild(pElement);
        divElement.addEventListener('click', (event) => {
            event.target.querySelector('p').style.display = 'block';
        });

        contentEl.appendChild(divElement);
    });
}