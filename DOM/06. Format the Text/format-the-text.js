function solve() {
    const inputElement = document.querySelector('#input');
    const outputElement = document.querySelector('#output');

    const sentences = inputElement.value.split('. ');
    const sentencesPerParagraph = 3;

    const numberOfParagraphs = Math.ceil(sentences.length / sentencesPerParagraph);

    let output = '';

    for (let i = 0; i < numberOfParagraphs; i++) {
        const start = i * sentencesPerParagraph;
        const end = start + sentencesPerParagraph;

        const inputSentence = sentences.slice(start, end).join('.');

        output += `<p>${inputSentence}</p>\n`;
    }

    outputElement.innerHTML = output;

}