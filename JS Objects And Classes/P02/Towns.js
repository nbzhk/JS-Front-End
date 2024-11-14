function towns(input) {
    const towns = {};

    input.forEach(element => {

        let [ town, latitude, longitude ] = element.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        console.log( {town, latitude, longitude} );
        
    });
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);