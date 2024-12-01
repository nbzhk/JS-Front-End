window.addEventListener("load", solve);

function solve() {
    const addButtonEl = document.getElementById('add-btn');
    const checkListEl = document.getElementById('check-list');
    const contactListEl = document.getElementById('contact-list');

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const categoryInput = document.getElementById('category');

    addButtonEl.addEventListener('click', () => {
        const name = nameInput.value;
        const phone = phoneInput.value;
        const category = categoryInput.value;

        if (name === '' || phone === '' || category === '') return;

        const liElement = createLiElementForContact(name, phone, category);

        checkListEl.appendChild(liElement);

        clearInputs()

    });

    function createLiElementForContact(name, phone, category) {
        const pName = document.createElement('p');
        pName.textContent = `name:${name}`;

        const pPhone = document.createElement('p');
        pPhone.textContent = `phone:${phone}`;

        const pCategory = document.createElement('p');
        pCategory.textContent = `category:${category}`;

        const articleEl = document.createElement('article');
        articleEl.appendChild(pName);
        articleEl.appendChild(pPhone);
        articleEl.appendChild(pCategory);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');

        editButton.addEventListener('click', () => {
           nameInput.value = name;
           phoneInput.value = phone;
           categoryInput.value = category;

           liElement.remove();
        });

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');

        saveButton.addEventListener('click', () => {
            divButtons.remove();

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('del-btn');

            deleteButton.addEventListener('click', (e) => {
                e.target.parentElement.remove();
            });

            checkListEl.removeChild(liElement);

            liElement.appendChild(deleteButton);

            contactListEl.appendChild(liElement);
        });

        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons');
        divButtons.appendChild(editButton);
        divButtons.appendChild(saveButton);

        const liElement = document.createElement('li');
        liElement.appendChild(articleEl);
        liElement.appendChild(divButtons);

        return liElement;
    }

    function clearInputs() {
        nameInput.value = '';
        phoneInput.value = '';
        categoryInput.value = '';
    }
  }
  