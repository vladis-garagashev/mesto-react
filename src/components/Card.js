import React from 'react';


function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);

  };

  return (

    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="card__content">
        <h2 className="card__heading">{card.name}</h2>
        <div className="card__like">
          <button type="button" className="button button_type_like" aria-label="Лайк"></button>
          <p className="card__likes-counter">{card.likes.length}</p>
        </div>
        <button  type="button" className="button button_type_delete" aria-label="Удалить карточку"></button>
      </div>
    </li>
  );
};

export default Card;

