function solve() {
    const tableHeadRow = document.querySelector('table thead tr');
    const tableBodyRows = document.querySelectorAll('table tbody tr');

    const checkedElements = [...tableHeadRow.children]
        .map((th, i) => ( { el: th.children[0], name: th.children[0].getAttribute('name'), index: i  } ))
        .filter(obj => obj.el.checked);

    console.log(checkedElements);

    const outputData = [...tableBodyRows]
        .map(row =>
            checkedElements.reduce((acc, curr) => {
                acc[curr.name] = row.children[curr.index].textContent;
                return acc;
            }, {})
        );

    console.log(outputData);

    const outputEl = document.querySelector('#output');
    outputEl.value = JSON.stringify(outputData);
}