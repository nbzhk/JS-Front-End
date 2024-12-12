window.addEventListener("load", solve);

function solve() {

    const addButtonEl = document.getElementById('add-btn');
    const modelEl = document.getElementById('laptop-model');
    const storageEl = document.getElementById('storage');
    const priceEL = document.getElementById('price');
    const checkListElement = document.getElementById('check-list');
    const laptopsListElement = document.getElementById('laptops-list');
    const clearButtonEl = document.querySelector('.clear');

    clearButtonEl.addEventListener('click', () => {
        window.location.reload();
    });


    function createLaptopItem(model, storage, price) {
        const pModelEl = document.createElement('p');
        pModelEl.textContent = model;

        const pStorageEl = document.createElement('p');
        pStorageEl.textContent = `Memory: ${storage} TB`;

        const pPriceEl = document.createElement('p');
        pPriceEl.textContent = `Price: ${price}$`;

        const articleEl = document.createElement('article');
        articleEl.appendChild(pModelEl);
        articleEl.appendChild(pStorageEl);
        articleEl.appendChild(pPriceEl);

        const editBtnEl = document.createElement('button');
        editBtnEl.setAttribute('class','btn edit');
        editBtnEl.textContent = 'edit';

        editBtnEl.addEventListener('click', () => {
           modelEl.value = model;
           storageEl.value = storage;
           priceEL.value = price;

           addButtonEl.removeAttribute('disabled');

           liElement.remove();
        });

        const okBtnEl = document.createElement('button');
        okBtnEl.setAttribute('class','btn ok');
        okBtnEl.textContent = 'ok';

        okBtnEl.addEventListener('click', () => {
           liElement.remove();

           const wishlistLaptopEl = document.createElement('li');
           wishlistLaptopEl.setAttribute('class','laptop-item');
           wishlistLaptopEl.appendChild(articleEl)

           laptopsListElement.appendChild(wishlistLaptopEl);

           addButtonEl.removeAttribute('disabled');
        });

        const liElement = document.createElement('li');
        liElement.classList.add('laptop-item');
        liElement.appendChild(articleEl);
        liElement.appendChild(editBtnEl);
        liElement.appendChild(okBtnEl);

        checkListElement.appendChild(liElement);

        addButtonEl.setAttribute('disabled', 'disabled');

        modelEl.value = '';
        storageEl.value = '';
        priceEL.value = '';

    }

    addButtonEl.addEventListener('click', () => {

        const model = modelEl.value;
        const storage = storageEl.value;
        const price = priceEL.value;

        if (model === '' || storage === '' || price === '') {
            return;
        }

        createLaptopItem(model, storage, price);

    });
}
  