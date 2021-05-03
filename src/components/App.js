import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen ] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen ] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen ] = React.useState(false)

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);

  }

  return (
    <div className="page">
      <div className="page__container">
        <Header/>
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}/>
        <Footer/>

        <PopupWithForm title="Редактировать профиль" name="edit-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>

          <section className="form__section">
            <input className="form__item form__item_element_name" type="text" name="name" id="name" placeholder="Имя" minLength="2" maxLength="40" required/>
            <span className="form__item-error" id="name-error"></span>
          </section>

          <section className="form__section">
            <input className="form__item form__item_element_job" type="text" name="about" id="about" placeholder="О себе" minLength="2" maxLength="200" required/>
            <span className="form__item-error" id="about-error"></span>
          </section>

        </PopupWithForm>

        <PopupWithForm title="Новое место" name="add-card" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>

          <section className="form__section">
            <input className="form__item form__item_element_name" type="text" name="name" id="image-name" placeholder="Название" minLength="2" maxLength="30" required/>
            <span className="form__item-error" id="image-name-error"></span>
          </section>

          <section className="form__section">
            <input className="form__item form__item_element_image-link" type="url" name="link" id="image-link" placeholder="Ссылка на картинку" required/>
            <span className="form__item-error" id="image-link-error"></span>
          </section>

        </PopupWithForm>

        <PopupWithForm title="Обновить аватар" name="edit-avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>

          <section className="form__section">
            <input className="form__item form__item_element_image-link" type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required/>
            <span className="form__item-error" id="avatar-error"></span>
          </section>

        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="delete-card"/>

        <artticle className="popup" id="popupImagePrevie">

          <div className="popup__container">
            <figure className="figure">
              <figcaption className="figure__figcaption">
                <img className="figure__image" src="#" alt="шаблон"/>
                <p className="figure__caption"></p>
              </figcaption>
              <button className="button button_type_close" type="reset" aria-label="Закрыть"></button>
            </figure>
          </div>

        </artticle>

      </div>

    </div>

  );
}

export default App;
