'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window'); // выбирает все элементы с таким классом

// console.log(btnsShowModalWindow);

const showModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].addEventListener('click', showModalWindow);
}

btnCloseModalWindow.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

// события нажатия клавиш на клавиатуре слушаются глобально на всей странице. Для того чтобы задать определённую клавишу для действия, нужно передать в функцию парамаетр e - event, в этом случае мы получим обьект KeybordEvent со свойствами и значениям, в котором будет указанно какая клавиша была нажата (свойство key:)
document.addEventListener('keydown', function (e) {
  // console.log(e.key); // выводит информацию, какая клавиша была нажата

  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    // .contains проверяет, содержит ли modalWindow класс hidden
    closeModalWindow();
  }
});
