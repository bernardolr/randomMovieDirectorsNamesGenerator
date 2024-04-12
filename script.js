// CodeCademy exercise
// Random Movie generator
// By: Bernardo Lopez Rosso 
// Date: April 11 2024

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

}

console.log(randomMovie(directors,movies,years));
