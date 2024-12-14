window.addEventListener("load", solve);

function solve() {
  const addBtnEl = document.getElementById('add-btn');
  const eventNameEl = document.getElementById('name');
  const timePeriodEl = document.getElementById('time');
  const descriptionEl = document.getElementById('description');
  const previewListEl = document.getElementById('preview-list');
  const archiveListEl = document.getElementById('archive-list');

  function edit(name, time, description) {
      eventNameEl.value = name;
      timePeriodEl.value = time;
      descriptionEl.value = description;

      addBtnEl.removeAttribute('disabled');

  }

  function createLiElement(name, time, description) {
      const pNameEl = document.createElement('p');
      pNameEl.textContent = name;

      const pTimeEl = document.createElement('p');
      pTimeEl.textContent = time;

      const pDescriptionEl = document.createElement('p');
      pDescriptionEl.textContent = description;

      const articleEl = document.createElement('article');
      articleEl.appendChild(pNameEl);
      articleEl.appendChild(pTimeEl);
      articleEl.appendChild(pDescriptionEl);

      const editBtnEl = document.createElement('button');
      editBtnEl.className = 'edit-btn';
      editBtnEl.textContent = 'Edit';

      editBtnEl.addEventListener('click',() => {
          liElement.remove();
          edit(name, time, description)
      });

      const nextBtnEl = document.createElement('button');
      nextBtnEl.className = 'next-btn';
      nextBtnEl.textContent = 'Next';

      nextBtnEl.addEventListener('click',() => {
          liElement.remove();

          const archiveLiEl = document.createElement('li');
          archiveLiEl.appendChild(articleEl);
          const archiveBtn = document.createElement('button');
          archiveBtn.className = 'archive-btn';
          archiveBtn.textContent = 'Archive';

          archiveBtn.addEventListener('click',() => {
              archiveLiEl.remove();

              addBtnEl.removeAttribute('disabled');
          })

          archiveLiEl.appendChild(archiveBtn);

          archiveListEl.appendChild(archiveLiEl);
      })

      const divButtonsWrapperEl = document.createElement('div');
      divButtonsWrapperEl.className = 'buttons';
      divButtonsWrapperEl.appendChild(editBtnEl);
      divButtonsWrapperEl.appendChild(nextBtnEl);

      const liElement = document.createElement('li');
      liElement.appendChild(articleEl);
      liElement.appendChild(divButtonsWrapperEl);

      return liElement;
  }

  addBtnEl.addEventListener('click', () => {
    const name = eventNameEl.value;
    const time = timePeriodEl.value;
    const description = descriptionEl.value;

    eventNameEl.value = '';
    timePeriodEl.value = '';
    descriptionEl.value = '';

    addBtnEl.setAttribute('disabled', 'disabled');

    const liElement = createLiElement(name, time, description);

    previewListEl.appendChild(liElement);

  });
}