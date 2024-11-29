function solve() {
    const searchedStr = document.querySelector('#searchField').value.toLowerCase().trim();
    const students = document.querySelectorAll('table tbody tr');

    if (searchedStr === '') return;

    students.forEach((student) => {

        student.classList.remove('select');

        if (student.textContent.toLowerCase().includes(searchedStr)) {
            student.classList.add('select');
        }
    });
}
