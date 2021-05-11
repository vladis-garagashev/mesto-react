import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] =useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentUser, setCurrentUser] = useState();


  useEffect(() => {

    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch(error => console.log(error));

}, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page__container">

      <CurrentUserContext.Provider value={currentUser}>
        <Header/>

        <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}/>

        <Footer/>

        <PopupWithForm title="Редактировать профиль" name="edit-profile" btnText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <section className="form__section">
            <input className="form__item form__item_element_name" type="text" name="name" id="name" placeholder="Имя" minLength="2" maxLength="40" required/>
            <span className="form__item-error" id="name-error"></span>
          </section>
          <section className="form__section">
            <input className="form__item form__item_element_job" type="text" name="about" id="about" placeholder="О себе" minLength="2" maxLength="200" required/>
            <span className="form__item-error" id="about-error"></span>
          </section>
        </PopupWithForm>

        <PopupWithForm title="Новое место" name="add-card" btnText="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <section className="form__section">
            <input className="form__item form__item_element_name" type="text" name="name" id="image-name" placeholder="Название" minLength="2" maxLength="30" required/>
            <span className="form__item-error" id="image-name-error"></span>
          </section>
          <section className="form__section">
            <input className="form__item form__item_element_image-link" type="url" name="link" id="image-link" placeholder="Ссылка на картинку" required/>
            <span className="form__item-error" id="image-link-error"></span>
          </section>
        </PopupWithForm>

        <PopupWithForm title="Обновить аватар" name="edit-avatar" btnText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <section className="form__section">
            <input className="form__item form__item_element_image-link" type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required/>
            <span className="form__item-error" id="avatar-error"></span>
          </section>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="delete-card" btnText="Да"/>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      </CurrentUserContext.Provider>

    </div>
  );
};

export default App;
