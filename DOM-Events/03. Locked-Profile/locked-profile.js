document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const profileElements = document.querySelectorAll('.profile');

    profileElements.forEach(profile => {
        const buttonsElement = profile.querySelector('button');
        buttonsElement.addEventListener('click', handleClick);
    });

    function handleClick(event) {
        const currentProfileElement = event.target.closest('.profile');
        const state = currentProfileElement
            .querySelector('input[name*="Locked"]:checked')
            .getAttribute('id');


        if (state.includes('Unlock')) {
            const hiddenFieldsEl = currentProfileElement.querySelector('.hidden-fields');
            changeView(hiddenFieldsEl);
            changeButton(currentProfileElement);
        }
    }

    function changeView(hiddenFieldsEl) {
        const currentView = window.getComputedStyle(hiddenFieldsEl).display;
        hiddenFieldsEl.style.display = currentView === 'none' ? 'block' : 'none';
    }

    function changeButton(currentProfileElement) {
        const button = currentProfileElement.querySelector('button');
        const currentValue = button.textContent;

        button.textContent = currentValue === 'Show more' ? 'Show less' : 'Show more';
    }
}