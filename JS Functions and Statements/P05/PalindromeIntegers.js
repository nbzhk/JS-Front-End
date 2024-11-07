function palindromeOrNot(numbers) {

    numbers.forEach(number => {

        const diggits = number.toString().split('');
        let isPalindrome;
        
        for (let i = 0; i < diggits.length / 2; i++) {
            
            if(diggits[i] !== diggits[diggits.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
            
            isPalindrome = true;
        }

        console.log(isPalindrome);
        
    });

}

palindromeOrNot([123,323,421,121]);
palindromeOrNot([32,2,232,1010]);