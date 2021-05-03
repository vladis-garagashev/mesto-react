import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePreviePopupOpen, setImagePreviePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  function handleCardClick(card) {
    setImagePreviePopupOpen(!isImagePreviePopupOpen);
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePreviePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div className="page__container">

      <Header/>

      <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}/>

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

      <ImagePopup card={selectedCard} isOpen={isImagePreviePopupOpen} onClose={closeAllPopups}/>

    </div>
  );
};

export default App;
