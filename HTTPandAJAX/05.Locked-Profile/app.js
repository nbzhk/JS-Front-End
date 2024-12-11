function lockedProfile() {

    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/profiles';

    const profileElement = document.querySelector('.profile');
    const mainElement = document.getElementById('main');

    function showMore(profile, id) {
        const {checked: isLocked} = profile.querySelector(`input[name='${id}']`);

        if (isLocked) {
            return;
        }

        const hiddenDivEl = profile.querySelector('.profile > div');
        const buttonEl = profile.querySelector('button');

        if (buttonEl.textContent === 'Show more') {
            hiddenDivEl.style.display = 'block';
            buttonEl.textContent = 'Hide it';
        } else {
            hiddenDivEl.style.display = 'none';
            buttonEl.textContent = 'Show more';
        }


    }

    function createProfile({username, email, age, _id}) {
        const profileClone = profileElement.cloneNode(true);

        profileClone.querySelector('input[name=user1Username]').value = username;
        profileClone.querySelector('input[name=user1Email]').value = email;
        profileClone.querySelector('input[name=user1Age]').value = age;

        const [radioUnlockedEl, radioLockedEl] = profileClone.querySelectorAll('input[name=user1Locked]');
        radioLockedEl.name = _id;
        radioUnlockedEl.name = _id;

        profileClone.querySelector('.profile > div').style.display = 'none';

        const button = profileClone.querySelector('button');
        button.addEventListener('click', () => showMore(profileClone, _id));

        mainElement.appendChild(profileClone);

    }

    function getAllProfiles() {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach((profile) => {
                    createProfile(profile);
                })
            })
            .then(() => profileElement.remove());
    }

    getAllProfiles();
}