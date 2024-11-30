document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const values = {days: 86400, hours: 3600, minutes: 60, seconds: 1};

    const secondsEl = document.getElementById('seconds-input');
    const minutesEl = document.getElementById('minutes-input');
    const hoursEl = document.getElementById('hours-input');
    const daysEl = document.getElementById('days-input');

    document.querySelectorAll('form').forEach((f) => {
        f.addEventListener('submit', handleSubmit);
    });

    function handleSubmit(event) {
        event.preventDefault();

        const currentEl = event.target.querySelector('input[type="number"]');
        const currentValue = Number(currentEl.value);

        const key = currentEl.getAttribute('id').split('-input')[0];
        const multiplier = values[key];

        updateValues(currentValue * multiplier);
    }

    function updateValues(seconds) {
        secondsEl.value = Number( seconds / values.seconds).toFixed(2);
        minutesEl.value = Number( seconds / values.minutes).toFixed(2);
        hoursEl.value = Number( seconds / values.hours).toFixed(2);
        daysEl.value = Number( seconds / values.days).toFixed(2);
    }
}