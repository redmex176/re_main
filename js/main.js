"use strict";
// let numbersOfFilms;
    
// function start() {
//      numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

//     while (numbersOfFilms == "" || numbersOfFilms == null || isNaN(numbersOfFilms)) {
//         numbersOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
//     }
// }

// start();

// let personalMoveDB = {
//         count: numbersOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };


// function rememberMyFilms() {
//     for (let i=0; i<2; i++) {
   
//     let firstQuestion = prompt("Один из последних просмотренных фильмов?");
//     let secondQuestion = prompt("На сколько оцените его?");

//     if (firstQuestion != "" && secondQuestion != "" && firstQuestion  != null && secondQuestion  != null && firstQuestion.length < 50 && secondQuestion.length  <50) {
//          personalMoveDB.movies[firstQuestion] = secondQuestion;
//      } else {
//          console.log("Введите еще раз!");
//          i--;
//   }
// }
// }
// rememberMyFilms();

// function detectPersonalLvl() {
//     if (personalMoveDB.count < 10) {
//     console.log("Очень мало фильмов");
// } else if (personalMoveDB.count < 30) {
//  console.log("Очень нормас");
// }else if (personalMoveDB.count < 90) {
//  console.log("Ахуеть");
// }
// }
// detectPersonalLvl();
// function showMyDB() {
//     if(personalMoveDB.privat == false){
//         console.log(personalMoveDB);
//     } else {
//          console.log("Done ");
//     }
// }
// showMyDB();
// function writeYourGenres() {
//     for (let i=1; i<=3; i++) {
   
//     let yourGenres = prompt(`Ваш любимый жанр № ${i}) ?`);
    
//     personalMoveDB.genres.push(yourGenres);
    
//     }
// }
// writeYourGenres();


let obj = {
    a: 5,
    b: 1,
    c: 12,
    d: 3,
    f: {
        a: 3,
        c: 5
    }
};

function copy(mainObj) {
    let key;
    let newObj = {};
    for (key in mainObj) {
         newObj[key] = mainObj[key];
    }
    return newObj;
}

let copyObj = copy(obj);

console.log(copyObj);