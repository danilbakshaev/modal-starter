$(() => {
  // МОДАЛКИ
  // Кнопки вызова модалки
  const buttonCallback = $('.openCallback');
  const buttonMenu = $('.openMenu');

  // Сама модалка
  const modalCallback = $('.modal-wrapper__callback');
  const modalLeftMenu = $('.modal-wrapper__left-menu');

  //Доп
  const modalWrapper = $('.modal-wrapper');
  const body = $('body');
  const buttonClose = $('.modal-wrapper__close');

  //Функция закрытия всех модалок в контейнере modal-wrapper
  function closeAllModal() {
    body.removeClass('noflow');
    modalWrapper.removeClass('show');
    modalCallback.removeClass('show');
    modalLeftMenu.removeClass('show');
  }

  buttonClose.click(function (){
    closeAllModal();
  })

  buttonCallback.click(function (){
    // console.log("buttonCallback");
    modalWrapper.addClass('show');
    modalCallback.addClass('show');
    body.addClass('noflow');
  })

  buttonMenu.click(function (){
    // console.log("buttonMenu");
    modalWrapper.addClass('show');
    modalLeftMenu.addClass('show');
    body.addClass('noflow');
  })
})