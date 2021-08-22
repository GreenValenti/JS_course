"use strict";

//alert ("Hello");
//const result = confirm("Are you here?");
//console.log(result);

//const answer = prompt("Как дела?", "Нормально");
//console.log(answer);

//const answers =[];
//answers [0] = prompt("Как ваше имя?", "");
//answers [0] = prompt("Как ваша фамилия?", "");
//answers [0] = prompt("Сколько вам лет?", "");
//console.log (answers);

//Интерполяция
//const user = "Valentina"
//alert(`Привет, ${user}`);

//const category =`toys`;
//console.log(`http://someurl.com/&{category}/8`);

/*let incr = 10,
    decr = 10;
    incr++;
    decr--;
    console.log(incr);
    console.log(decr);*/

    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: {},
        privat: false
    };

    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', ''),
          c = prompt('Один из последних просмотренных фильмов?', ''),
          d = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);