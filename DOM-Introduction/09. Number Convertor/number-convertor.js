function solve() {

    const input = Number(document.querySelector('#input').value);
    const type = document.querySelector("#selectMenuTo").value;
    const resultElement = document.querySelector('#result');

    if (type === 'binary') {
        resultElement.value = input.toString(2);
    } else if (type === 'hexadecimal') {
        resultElement.value = input.toString(16).toUpperCase();
    }
}