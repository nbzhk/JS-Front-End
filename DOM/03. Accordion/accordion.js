function toggle() {
    const buttonElement = document.querySelector('.head span.button');
    const extraElement = document.getElementById('extra');



    if (extraElement.style.display === 'none' || !extraElement.style.display) {
        extraElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        extraElement.style.display = 'none';
        buttonElement.textContent = 'More'
    }
}