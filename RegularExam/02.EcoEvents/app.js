window.addEventListener("load", solve);

function solve() {
  const nextBtnEl = document.getElementById('next-btn');
  const inputEmailEl = document.getElementById('email');
  const inputEventEl = document.getElementById('event');
  const locationInputEl = document.getElementById('location');
  const previewListEl = document.getElementById('preview-list');
  const eventListEl = document.getElementById('event-list');


  function createElement(email, event, location) {
      const h4EmailEl = document.createElement('h4');
      h4EmailEl.textContent = email;

      const pEventElement = document.createElement('p');

      const strongEventEL = document.createElement('strong');
      strongEventEL.textContent = 'Event:';

      const brElement = document.createElement('br');

      pEventElement.appendChild(strongEventEL);
      pEventElement.appendChild(brElement);
      pEventElement.appendChild(document.createTextNode(event));

      const pLocationElement = document.createElement('p');

      const strongLocationEl = document.createElement('strong');
      strongLocationEl.textContent = 'Location:';
      const brLocationEl = document.createElement('br');

      pLocationElement.appendChild(strongLocationEl);
      pLocationElement.appendChild(brLocationEl);
      pLocationElement.appendChild(document.createTextNode(location));

      const articleEl = document.createElement('article');
      articleEl.appendChild(h4EmailEl);
      articleEl.appendChild(pEventElement);
      articleEl.appendChild(pLocationElement);

      const editBtnEl = document.createElement('button');
      editBtnEl.textContent = 'edit';
      editBtnEl.className = 'action-btn edit';

      editBtnEl.addEventListener('click', () => {
          liElement.remove();

          inputEmailEl.value = email;
          inputEventEl.value = event;
          locationInputEl.value = location;

          nextBtnEl.removeAttribute('disabled');
      });

      const applyBtnEl = document.createElement('button');
      applyBtnEl.textContent = 'apply';
      applyBtnEl.className = 'action-btn apply';

      applyBtnEl.addEventListener('click', () => {
          liElement.remove();

          const newLiEl = document.createElement('li');
          newLiEl.className = 'application';
          newLiEl.appendChild(articleEl);

          nextBtnEl.removeAttribute('disabled');

          eventListEl.appendChild(newLiEl);
      });

      const liElement = document.createElement('li');
      liElement.className = 'application';

      liElement.appendChild(articleEl);
      liElement.appendChild(editBtnEl);
      liElement.appendChild(applyBtnEl);

      previewListEl.appendChild(liElement);

  }

  nextBtnEl.addEventListener('click', () => {
      const email = inputEmailEl.value;
      const event = inputEventEl.value;
      const location = locationInputEl.value;

      if (email === '' || event === '' || location === '') return;

      inputEmailEl.value = '';
      inputEventEl.value = '';
      locationInputEl.value = '';

      nextBtnEl.setAttribute('disabled', 'disabled');

      createElement(email, event, location);

  });
}
