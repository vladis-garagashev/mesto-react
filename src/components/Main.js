import { useState, useEffect, useContext } from 'react';
import api from '../utils/Api'
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {

  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {

      api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch(error => console.log(error));

  }, []);

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch(error => console.log(error));
}

function handleCardDelete(card) {

  // Отправляем запрос в API и удаляем карточку
  api.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((c) => c._id !== card._id));
  })
    .catch(error => console.log(error));
}

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-image" src={currentUser?.avatar} alt={currentUser?.name}/>
          <button
            type="button"
            className="button button_type_edit-avatar"
            aria-label="Изменить аватар"
            onClick={onEditAvatar}>
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{currentUser?.name}</h1>
          <button
            type="button"
            className="button button_type_edit"
            aria-label="Редактировать профиль"
            onClick={onEditProfile}>
          </button>
          <p className="profile__job">{currentUser?.about}</p>
        </div>

        <button
          type="button"
          className="button button_type_add"
          aria-label="Добавить фото"
          onClick={onAddPlace}>
        </button>

      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}/>
          ))}
        </ul>
      </section>

    </main>
  );
};

export default Main;
