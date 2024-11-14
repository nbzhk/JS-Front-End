function loadingBar(number) {

    const persents = number / 10;

    let bar = '';

    for (let i = 0; i < persents; i++) {
        bar += '%';
    }


    for (let i = bar.length; i < 10; i++) {
        bar += '.';
    }

    
    if(persents === 10) {
        console.log('100% Complete!');
        console.log(`[${bar}]`);
       
    } else {
        console.log(`${number}% [${bar}]`)
        console.log('Still loading...');
        
    }
    

}

loadingBar(30);
loadingBar(50);
loadingBar(100);