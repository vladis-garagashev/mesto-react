import React from 'react';


function Header() {

  function handleEditAvatarClick() {
    document.querySelector('#popupAvatar').classList.add('popup_opened');
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
          <img className="profile__avatar-image" src="#" alt="Аватар профиля"/>
          <button
          type="button"
          className="button button_type_edit-avatar"
          aria-label="Изменить аватар"
          onClick={handleEditAvatarClick}>
          </button>
        </div>

        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button
          type="button"
          className="button button_type_edit"
          aria-label="Редактировать профиль"
          onClick={handleEditProfileClick}>
          </button>
          <p className="profile__job"></p>
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

        </ul>
      </section>

    </main>
  );
}

export default Header;
