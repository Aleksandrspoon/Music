const categoryButtons = document.querySelectorAll('.category-button'); // находим все кнопки категорий

categoryButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (!button.classList.contains('active')) { // если кнопка неактивна
      categoryButtons.forEach(function(btn) {
        btn.classList.remove('active'); // сначала удаляем активный класс у всех кнопок
      });
      button.classList.add('active'); // затем добавляем его только для нажатой кнопки
    } else { // если кнопка уже активна
      button.classList.remove('active'); // удаляем активный класс
    }
  });
});