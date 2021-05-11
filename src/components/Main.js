import React from 'react';
import api from '../utils/Api'
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';


function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

      api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch(error => console.log(error));

  }, []);


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
            <Card key={card._id} card={card} onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>

    </main>
  );
};

export default Main;
