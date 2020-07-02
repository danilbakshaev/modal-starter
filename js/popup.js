(function() {
  
  //Вызов окна колбека
  openCallback = document.querySelector('.openCallback');
  callbackModal = document.querySelector('.modal-wrapper__callback');

  openCallback.addEventListener('click', function () {
    openBaseModal();
    callbackModal.classList.remove('hidden');
    setTimeout(function () {
      callbackModal.classList.remove('animation');
    }, 20);
  })

  function closecallbackPopup() {
    if (!callbackModal.classList.contains('hidden')) {
      callbackModal.classList.add('animation');    
      callbackModal.addEventListener('transitionend', function(e) {
        callbackModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
  };

  //Вызов окна колбека
  openLeftMenu = document.querySelector('.openMenu');
  leftMenuModal = document.querySelector('.modal-wrapper__left-menu');

  openLeftMenu.addEventListener('click', function () {
    openBaseModal();
    leftMenuModal.classList.remove('hidden');
    setTimeout(function () {
      leftMenuModal.classList.remove('animation');
    }, 20);
  })

  function closeleftMenuModal() {
    if (!leftMenuModal.classList.contains('hidden')) {
      leftMenuModal.classList.add('animation');    
      leftMenuModal.addEventListener('transitionend', function(e) {
        leftMenuModal.classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }

  };

  function closeAllModal() {
    closecallbackPopup();
    closeleftMenuModal();
    closeBaseModal();
  };

  //База модальных окон
  body = document.querySelector('body');
  modalWrapper = document.querySelector('.modal-wrapper');
  modalWrapperBg = document.querySelector('.modal-wrapper__bg');
  modalWrapperClose = document.querySelectorAll('.modal-wrapper__close');

  function openBaseModal() {
    body.classList.add('noflow');
    modalWrapper.classList.remove('hidden');
    setTimeout(function () {
      modalWrapper.classList.remove('animation');
    }, 20);
  };

  function closeBaseModal() {
    body.classList.remove('noflow');
    modalWrapper.classList.add('animation');    
    modalWrapper.addEventListener('transitionend', function(e) {
      modalWrapper.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  };

  for(let i = 0; i<modalWrapperClose.length; i++){
    modalWrapperClose[i].addEventListener('click', () => {
      closeAllModal();
    });
  }

  modalWrapperBg.addEventListener('click', function () {
    closeAllModal();
  })

  document.onkeydown = function(e) {
    e = e || window.event;
    if (e.key=='Escape'||e.key=='Esc'||e.keyCode==27) {
      closeAllModal();
    }
  };

})();