import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';


function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const linkRef = useRef();
  const nameRef = useRef();

  //-----------------------------------

  // Обработчик сабмита формы
  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value
    });
  }

  //-----------------------------------

  return (
    <PopupWithForm title="Новое место" name="add-card" btnText="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <section className="form__section">
        <input className="form__item form__item_element_name" type="text" name="name" id="image-name" placeholder="Название" minLength="2" maxLength="30" required ref={nameRef}/>
        <span className="form__item-error" id="image-name-error"></span>
      </section>
      <section className="form__section">
        <input className="form__item form__item_element_image-link" type="url" name="link" id="image-link" placeholder="Ссылка на картинку" required ref={linkRef}/>
        <span className="form__item-error" id="image-link-error"></span>
      </section>
    </PopupWithForm>
  );
  
};

export default AddPlacePopup;
