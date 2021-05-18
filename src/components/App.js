import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

  const [currentUser, setCurrentUser] = useState();
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] =useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  //-----------------------------------

  // Получаем данные профиля
  useEffect(() => {
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch(error => console.log(error));
  }, []);

  // Получаем карточки
  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch(error => console.log(error));
  }, []);

  //-----------------------------------

  // Функция проставки и удаления лайков у карточки
  function handleCardLike(card) {

    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch(error => console.log(error));
  };

  //-----------------------------------

  // Функция удаления карточки
  function handleCardDelete(card) {

    // Отправляем запрос в API и удаляем карточку
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(error => console.log(error));
  };

  //-----------------------------------

  // Обработчики открытия и закрытия попапов
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

  //-----------------------------------

  // Обработчики обновления данных пользователя
  function handleUpdateUser(formData) {
    api.editUserInfo(formData)
      .then(NewUserData => {
        setCurrentUser(NewUserData);
      })
      .catch(error => console.log(error))
      .finally(() => closeAllPopups());
  };

  function handleUpdateAvatar(formData) {
    api.editUserAvatar(formData)
      .then(NewUserAvatar => {
        setCurrentUser(NewUserAvatar);
      })
      .catch(error => console.log(error))
      .finally(() => closeAllPopups());
  };

  //-----------------------------------
  // Обработчик добавления карточки

  function handleAddPlaceSubmit(formData) {
    api.addCard(formData)
    .then(newCard => {
      setCards([newCard, ...cards]);
    })
    .catch(error => console.log(error))
    .finally(() => closeAllPopups());
  }

  //-----------------------------------

  return (
    <div className="page__container">

      <CurrentUserContext.Provider value={currentUser}>
        <Header/>

        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}/>

        <Footer/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>



        <PopupWithForm title="Вы уверены?" name="delete-card" btnText="Да"/>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      </CurrentUserContext.Provider>

    </div>
  );
  
};

export default App;
