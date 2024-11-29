function solve() {

    const townsElements = Array.from(document.querySelectorAll('#towns li'));


    function getMatches(towns, input) {
        return towns
            .filter(el => el.textContent.toLowerCase()
                .includes(input.toLowerCase()));
    }

    const inputElement = document.getElementById('searchText');

    let matches = getMatches(townsElements, inputElement.value);


    townsElements.forEach(el => {
        if (matches.includes(el)) {
            el.style.fontWeight = 'bold';
            el.style.textDecoration = 'underline';
        }
    });

    let resultElement = document.getElementById('result');

    resultElement.textContent = `${matches.length} matches found`;


}