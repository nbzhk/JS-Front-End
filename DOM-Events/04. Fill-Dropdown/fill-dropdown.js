document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const formEl = document.querySelector('form');
    const menuEl = document.getElementById('menu');


    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTextEl = document.getElementById('newItemText');
        const newValueEl = document.getElementById('newItemValue');

        const newText = newTextEl.value;
        const newValue = newValueEl.value;

        const newOptElement = document.createElement('option');
        newOptElement.setAttribute('value', newValue);
        newOptElement.textContent = newText;

        menuEl.appendChild(newOptElement);

        newTextEl.value = '';
        newValueEl.value = '';

    });
}