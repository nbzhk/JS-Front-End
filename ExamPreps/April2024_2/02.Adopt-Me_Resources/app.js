window.addEventListener("load", solve);

function solve() {

  const adoptButton = document.getElementById('adopt-btn');
  const typeElement = document.getElementById('type');
  const ageElement = document.getElementById('age');
  const genderElement = document.getElementById('gender');
  const adoptInfoElement = document.getElementById('adoption-info');
  const adoptedListElement = document.getElementById('adopted-list');

  function edit(type, age, gender) {

    typeElement.value = type;
    ageElement.value = age;
    genderElement.value = gender;

  }

  function createLiElement(type, age, gender) {
    const pPetElement = document.createElement('p');
    pPetElement.textContent = `Pet:${type}`;

    const pGenderElement = document.createElement('p');
    pGenderElement.textContent = `Gender:${gender}`;

    const pAgeElement = document.createElement('p');
    pAgeElement.textContent = `Age:${age}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(pPetElement);
    articleElement.appendChild(pGenderElement);
    articleElement.appendChild(pAgeElement);

    const editButtonElement = document.createElement('button');
    editButtonElement.textContent = `Edit`;
    editButtonElement.classList.add('edit-btn');



    const doneButtonElement = document.createElement('button');
    doneButtonElement.textContent = `Done`;
    doneButtonElement.classList.add('done-btn');

    doneButtonElement.addEventListener('click', () => {
      liElement.removeChild(buttonsDivElement);

      adoptInfoElement.removeChild(liElement);

      const clearBtn = document.createElement('button');
      clearBtn.textContent = `Clear`;
      clearBtn.classList.add('clear-btn');

      clearBtn.addEventListener('click', () => {
        adoptedListElement.removeChild(liElement);
      });

      liElement.appendChild(clearBtn);

      adoptedListElement.appendChild(liElement);
    });

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.appendChild(editButtonElement);
    buttonsDivElement.appendChild(doneButtonElement);

    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(buttonsDivElement);

    editButtonElement.addEventListener('click', () => {

      edit(type, age, gender)

      adoptInfoElement.removeChild(liElement);
    });

    resetInputValues();

    return liElement;
  }

  function resetInputValues() {
    typeElement.value = '';
    ageElement.value = '';
    genderElement.value = '';
  }

  function adoptHandler(event){

    event.preventDefault();

    const type = typeElement.value;
    const age = ageElement.value;
    const gender = genderElement.value;

    if (type === '' || age === '' || gender === '') {
      return;
    }

    const liElement = createLiElement(type, age, gender);
    adoptInfoElement.appendChild(liElement);
  }

  adoptButton.addEventListener('click', adoptHandler);
}
  