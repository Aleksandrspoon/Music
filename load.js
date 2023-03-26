const skeleton = document.querySelector('.skeleton'); // находим блок со скелетоном
const mainContent = document.querySelector('.main-content'); // находим блок с основным контентом
const loadingTime = 5000; // время загрузки в миллисекундах

setTimeout(function() {
  skeleton.style.display = 'none'; // скрываем скелетон
  mainContent.style.display = 'block'; // отображаем основной контент
}, loadingTime);