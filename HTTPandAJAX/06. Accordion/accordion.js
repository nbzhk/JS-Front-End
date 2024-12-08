function solution() {
    const TITLE_URL = 'http://localhost:3030/jsonstore/advanced/articles/list';

    const mainSection = document.getElementById('main');

    document.addEventListener('DOMContentLoaded', loadTitles);

    function loadTitles(e) {


        fetch(TITLE_URL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach((article) => {

                    console.log(article);

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

                    divHead.appendChild(spanEl);
                    divHead.appendChild(buttonEL);

                    divAccordion.appendChild(divHead);

                    mainSection.appendChild(divAccordion);
                });
            });
    }

    function expand() {
        console.log('EXPAND!')
    }

}

solution();