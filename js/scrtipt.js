'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function checkGuess(){
  let randomNum = Math.floor(Math.random() * 100);

  console.log(randomNum);
  let attempt = 1,
      count = 10;

  return function start() {
    let num;
    do{
      num = prompt("Угадай число от 1 до 100", "Введи число");
      console.log(num);
    }
    while (!isNumber(num));
    let guessNum = Number(num);

    if(attempt <= count){
      if(guessNum === randomNum){
        let game = confirm("Поздравляю, Вы угадали. Хотели бы сыграть еще?");
        if(game){
          location.reload();
        } else{};
      } else if (guessNum < randomNum){
        alert(`Загаданное число больше, число попыток осталось ${count - attempt}`);
        attempt++;
        start();
      } else if (guessNum > randomNum){
        alert(`Загаданное число меньше, число попыток осталось ${count - attempt}`);
        attempt++;
        start();
      };
      attempt++;
    }else{
        let game = confirm("Попытки закончились. Хотели бы сыграть еще?");
        if(game){
          location.reload();
        } else{};
    };
  };
};

const startGame = game();
startGame();
console.dir(startGame);


























/* 





let randomNum = Math.floor(Math.random() * 100),
    num;

console.log(randomNum);

const check = function checkGuess(randomNum) {
 
  function guess (num) {
    do{
        num = prompt("Угадай число от 1 до 100", "Введи число");
        console.log(num);
    }
    while (!isNumber(num));
    return Number(num)
  };

  guess(num)
  let attempt = 1
  if(attempt <= 11){
    if(num === randomNum){
      let game = confirm("Поздравляю, Вы угадали. Хотели бы сыграть еще?");
      if(game){
        location.reload();
      } else {};
    } else if (num < randomNum){
      alert(`Загаданное число больше, число попыток осталось ${attempt}`);
      attempt++;
      
      
    } else if (num > randomNum) {
      alert(`Загаданное число меньше, число попыток осталось ${attempt}`);
      attempt++;
      
      
    } else {
      let game = confirm("Попытки закончились. Хотели бы сыграть еще?");
      if(game){
        location.reload();
      } else {};
    }
  }
};
check(randomNum);
const start = function(randomNum){
  
  function guess(num) {
    do{
        num = prompt("Угадай число от 1 до 100", "Введи число");
        console.log(num);
    }
    while (!isNumber(num));
    return Number(num)
  };

  check(guess(num), randomNum);
};

start(randomNum);


 */