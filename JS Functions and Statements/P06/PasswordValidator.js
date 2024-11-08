function passwordValidator(password) {

    function checkLength(pass) {
        return pass.length >= 6 && pass.length <=10;
    }


    function checkChars(pass) {
        const regex = /^[A-Za-z0-9]+$/g;

        return regex.test(pass);
    }

    function checkIfHasAtLeastTwoDigits(pass) {
        const regex = /[0-9]/g;
        return pass.match(regex)?.length >= 2;
    }


    const messages = [];

    if(!checkLength(password)) {
        messages.push(`Password must be between 6 and 10 characters`);
    };

    if(!checkChars(password)) {
        messages.push(`Password must consist only of letters and digits`);
    }

    if(!checkIfHasAtLeastTwoDigits(password)) {
        messages.push(`Password must have at least 2 digits`);
    }

    if(messages.length !== 0) {
        messages.forEach(m => {
            console.log(m);
        })
    } else {
        console.log(`Password is valid`);
    }
}

passwordValidator("logIn");
passwordValidator("MyPass123");