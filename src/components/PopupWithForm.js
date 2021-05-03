import React from 'react';


function PopupWithForm({name, title, children, isOpen, onClose}) {
  return (
    <article className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>

      <div className="popup__container">
        <form className="form form_type_edit-profile" method="POST" name={name} noValidate>
          <h3 className="form__heading">{title}</h3>

          {children}

          <button className="form__submit-button" type="submit">
            <p className="form__submit-title">Сохранить</p>
            <p className="form__submit-loading">Сохранение...</p>
          </button>
          <button className="button button_type_close" type="reset" aria-label="Закрыть" onClick={onClose}></button>
        </form>
      </div>

    </article>
  );
};

export default PopupWithForm;
