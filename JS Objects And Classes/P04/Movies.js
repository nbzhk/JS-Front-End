function moviesInfo(input) {

    const movies = {};

    input.forEach(command => {

        if (command.includes('addMovie')) {
            let name = command.split('addMovie ')[1];
            movies[name] = { name };
        } else if (command.includes('directedBy')) {
            let name = command.split(' directedBy ')[0];
            let director = command.split(' directedBy ');

            if (movies[name] !== undefined) {
                movies[name].director = director[1];
            }
        } else if (command.includes('onDate')) {
            let name = command.split(' onDate ')[0];
            let onDate = command.split(' onDate ');

            if (movies[name] !== undefined) {
                movies[name].date = onDate[1];
            }
        }

    })

    const completeMovies = Object.values(movies)
        .filter((movie) => movie.name && movie.director && movie.date);

    completeMovies.forEach(m => console.log(JSON.stringify(m)));

}

moviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);