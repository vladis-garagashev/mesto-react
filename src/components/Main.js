import React from 'react';
import api from '../utils/Api'
import Card from './Card';


function Main() {
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {

      api.getUserInfo()
      .then((userData) => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
      })
      .catch(error => console.log(error));

  })

  React.useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data)
    })
    .catch(error => console.log(error));
  })

  function handleEditAvatarClick() {
    document.querySelector('#popupAvatar').classList.add('popup_opened');
    console.log(cards);
  };

  function handleEditProfileClick() {
    document.querySelector('#popupProfile').classList.add('popup_opened');

  };

  function handleAddPlaceClick() {
    document.querySelector('#popupCard').classList.add('popup_opened');

  };

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar">
          <img className="profile__avatar-image" src={userAvatar} alt="Аватар профиля"/>
          <button
          type="button"
          className="button button_type_edit-avatar"
          aria-label="Изменить аватар"
          onClick={handleEditAvatarClick}
          >
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
          type="button"
          className="button button_type_edit"
          aria-label="Редактировать профиль"
          onClick={handleEditProfileClick}>
          </button>
          <p className="profile__job">{userDescription}</p>
        </div>

        <button
        type="button"
        className="button button_type_add"
        aria-label="Добавить фото"
        onClick={handleAddPlaceClick}>
        </button>

      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map(({_id, ...card}) => (
            <Card key={_id} {...card}/>
          ))}
        </ul>
      </section>

    </main>
  );
}

export default Main;
