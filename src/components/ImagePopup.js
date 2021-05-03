import React from 'react';


function ImagePopup({card, isOpen, onClose}) {
  return (
    <artticle className={`popup ${isOpen ? 'popup_opened' : ''}`} >

      <div className="popup__container">
        <figure className="figure">
          <figcaption className="figure__figcaption">
            <img className="figure__image" src={card.link} alt={card.name}/>
            <p className="figure__caption">{card.name}</p>
          </figcaption>
          <button className="button button_type_close" type="reset" aria-label="Закрыть" onClick={onClose}></button>
        </figure>
      </div>

    </artticle>
  );
};

export default ImagePopup;
