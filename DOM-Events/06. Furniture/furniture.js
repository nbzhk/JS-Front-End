document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const inputFormEl = document.getElementById('input');

  inputFormEl.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputEl = inputFormEl.querySelector('textarea');
      const elData = JSON.parse(inputEl.value);
      console.log(elData);

      const tableEl = document.querySelector('table tbody');

      elData.forEach((el) => {
          const newProduct = document.createElement('tr');

          //Image
          const productImgCell = document.createElement('td');
          const productImgElement = document.createElement('img');
          productImgElement.setAttribute('src', el.img);
          productImgCell.appendChild(productImgElement);
          newProduct.appendChild(productImgCell);

          //Name
          const productNameCell = document.createElement('td');
          productNameCell.textContent = el.name;
          newProduct.appendChild(productNameCell);

          //Price
          const productPriceCell = document.createElement('td');
          productPriceCell.textContent = el.price;
          newProduct.appendChild(productPriceCell);

          //Decoration Factor
          const productDecFactorCell = document.createElement('td');
          productDecFactorCell.textContent = el.decFactor;
          newProduct.appendChild(productDecFactorCell);

          //Mark
          const productMarkCell = document.createElement('td');
          const productCheckEl = document.createElement('input');
          productCheckEl.setAttribute('type', 'checkbox');
          productMarkCell.appendChild(productCheckEl);
          newProduct.appendChild(productMarkCell);


          tableEl.appendChild(newProduct);

      });
  });

  const shopFormEl = document.getElementById('shop');

   shopFormEl.addEventListener('submit', (e) => {
       e.preventDefault();

       const outputEl = e.target.querySelector('textarea');
       const checkedRows = [...document.querySelectorAll('table tbody tr:has(input:checked)')].map(el => ({
           name: el.children[1].textContent.trim(),
           price: Number(el.children[2].textContent),
           decFactor: Number(el.children[3].textContent),
       }));

        let outputMessage = `Bought furniture: ${checkedRows.map(el => el.name).join(', ')}\n`;
        outputMessage += `Total price: ${checkedRows.reduce((acc, el) => acc + el.price, 0)}\n`;
        outputMessage += `Average decoration factor: ${checkedRows.reduce((acc, el) => acc + el.decFactor, 0) / checkedRows.length}\n`;

        outputEl.textContent = outputMessage;
   });

}