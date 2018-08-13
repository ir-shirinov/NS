
        var letter = document.querySelector('.letter');
        var button = document.querySelector('.footer-contats a');
        var close = document.querySelector('.btn-close');
        var nameSave = localStorage.getItem('name');
        var emailSave = localStorage.getItem('email');
        var name1 = letter.querySelector('[name=name]');
        var email1 = letter.querySelector('[name=email]');
        var letterText = letter.querySelector('textarea');
        var letterSubmit = letter.querySelector('.letter-submit');

        button.addEventListener('click', function (evt) {
          evt.preventDefault();
          letter.classList.add('modal-open');
          if (nameSave) {
            name1.value = nameSave;
            if (emailSave) {
              email1.value = emailSave;
              letterText.focus();
            } else {
              email1.focus();
            };

          } else {
            name1.focus();
          };
          

        } );

        letterSubmit.addEventListener('click', function (evt) {
          if (!name1.value || !email1.value) {
            evt.preventDefault();
            letter.classList.remove('modal-error');
            letter.classList.add('modal-error');
          } else {
            localStorage.setItem('name', name1.value);
            localStorage.setItem('email', email1.value)
          };

        } );

        window.addEventListener('keydown', function (evt) {
          if (evt.keyCode === 27) {
            if (letter.classList.contains('modal-open')) {
              letter.classList.remove('modal-open');
              letter.classList.remove('modal-error');
            };
          };

        } );

        close.addEventListener('click', function (evt) {
          evt.preventDefault();
          letter.classList.remove('modal-open');
          letter.classList.remove('modal-error');
        } );

