const buttonAuthor = document.querySelector('.button-author'); // находим кнопку по классу

buttonAuthor.addEventListener('click', function() { // добавляем обработчик клика на кнопку
  const authorsList = document.querySelector('.authors-list'); // находим список исполнителей
  authorsList.classList.toggle('show'); // добавляем/удаляем класс, который отображает/скрывает список
});