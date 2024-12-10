function solution() {
    const TITLE_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const DETAILS_URL = 'http://localhost:3030/jsonstore/advanced/articles/details';

    const mainSection = document.getElementById('main');

    document.addEventListener('DOMContentLoaded', loadTitles);

    function loadTitles() {

        fetch(TITLE_URL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach((article) => {

                    const divAccordion = document.createElement('div');
                    divAccordion.classList.add('accordion');

                    const divHead = document.createElement('div');
                    divHead.classList.add('head');

                    const buttonEL = document.createElement('button');
                    buttonEL.textContent = 'MORE';
                    buttonEL.classList.add('button');
                    buttonEL.id = article._id;
                    buttonEL.addEventListener('click', expand);

                    const spanEl = document.createElement('span');
                    spanEl.textContent = article.title;

                    //Create the extra div
                    const pElement = document.createElement('p');
                    const divExtra = document.createElement('div');
                    divExtra.className = 'extra';
                    divExtra.style.display = 'none';
                    divExtra.appendChild(pElement);

                    divHead.appendChild(spanEl);
                    divHead.appendChild(buttonEL);

                    divAccordion.appendChild(divHead);
                    divAccordion.appendChild(divExtra);

                    mainSection.appendChild(divAccordion);
                });
            });
    }

    function expand(event) {
        const currentBtn = event.target;
        const accordionDiv = currentBtn.closest('.accordion');
        const extraDiv = accordionDiv.querySelector('.extra');
        const pElement = extraDiv.querySelector('p');


        if (extraDiv.style.display === 'block') {
            extraDiv.style.display = 'none';
            currentBtn.textContent = 'MORE';
        } else {

            fetch(DETAILS_URL + `/${currentBtn.id}`)
                .then(response => response.json())
                .then(data => {
                    pElement.textContent = data.content;
                    extraDiv.style.display = 'block';
                    currentBtn.textContent = 'LESS';
                })
        }

    }

}

solution();