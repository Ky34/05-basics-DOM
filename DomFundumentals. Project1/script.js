'use strict';

// console.log(document.querySelector('.guess-message').textContent); // выбирает текст в данном селекторе

// document.querySelector('.guess-message').textContent = 'Правильно!';

// document.querySelector('.question').textContent = '7';

// document.querySelector('.score').textContent = '11';

// document.querySelector('.number-input').value = 13;

// const eventHendler = function () {
//   console.log(document.querySelector('.number-input').value);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1; // получаем случайное целое число от 1 до 20
let score = 20;
let bestScore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // первый параметр - событие, которое слушаем на странице, второй - обработчик события, то что будет происходить при нажатии
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    // document.querySelector('.guess-message').textContent = 'Введите число!';
    displayGuessMessage('Введите число!');

    // Player won
  } else if (guessingNumber === secretNumber) {
    // document.querySelector('.guess-message').textContent = 'Правильно!';
    displayGuessMessage('Правильно!');
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)'; // меняем стиль CSS фон странички при победе
    document.querySelector('.question').style.width = '50rem';
    document.querySelector('.question').textContent = secretNumber;
    if (score > bestScore) {
      bestScore = score;
      document.querySelector('.highscore').textContent = bestScore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.guess-message').textContent =
      //   guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.guess-message').textContent = 'Игра окончена!';
      displayGuessMessage('Игра окончена!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // Too high
  // else if (guessingNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Слишком много!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Игра окончена!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  // Too low
  // } else if (guessingNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Слишком мало!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Игра окончена!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  // document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
