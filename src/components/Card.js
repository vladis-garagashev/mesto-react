import React from 'react';


function Card({link, name, likes}) {
  return (

    <li className="card">
      <img className="card__image" src={link} alt={name}/>
      <div className="card__content">
        <h2 className="card__heading">{name}</h2>
        <div className="card__like">
          <button type="button" className="button button_type_like" aria-label="Лайк"></button>
          <p className="card__likes-counter">{likes.length}</p>
        </div>
        <button  type="button" className="button button_type_delete" aria-label="Удалить карточку"></button>
      </div>
    </li>
  );
}

export default Card;

