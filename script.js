// Random Movie generator

const directors = [
    "Christopher Nolan",
    "Steven Spielberg",
    "Quentin Tarantino",
    "Martin Scorsese",
    "Alfred Hitchcock"
];

const movies = [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "Jurassic Park",
    "Schindler's List",
    "Pulp Fiction",
    "Django Unchained",
    "Goodfellas",
    "Taxi Driver",
    "Psycho"
];

const years = [
    1985,
    2001,
    2017,
    2022,
    2009,
    1999,
    2014,
    2019,
    2008,
    2020
];

//const moviesAndDirectors = [directors, movies, years];

function randomMovie(directors,movies,years) { 
    const randomDirector = directors[Math.floor(Math.random() * directors.length)];
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const randomYear = years[Math.floor(Math.random() * years.length)];


    return randomDirector + " " + randomMovie + " " + randomYear;
    //console.log(randomSelection);

}

//const randomSelection = randomMovie(directors);


console.log(randomMovie(directors,movies,years));




// const arr = [0,1,2,3,4];

// function logNumber(number){
//     console.log(number);
// }

// arr.forEach(logNumber);


