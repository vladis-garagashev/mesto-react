import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header/>
        <Main/>
        <Footer/>

        <article className="popup" id="popupProfile">

          <div className="popup__container">
            <form className="form form_type_edit-profile" method="POST" name="editProfileForm" noValidate>
              <h3 className="form__heading">Редактировать профиль</h3>

              <section className="form__section">
                <input className="form__item form__item_element_name" type="text" name="name" id="name" placeholder="Имя" minLength="2" maxLength="40" required/>
                <span className="form__item-error" id="name-error"></span>
              </section>

              <section className="form__section">
                <input className="form__item form__item_element_job" type="text" name="about" id="about" placeholder="О себе" minLength="2" maxLength="200" required/>
                <span className="form__item-error" id="about-error"></span>
              </section>

              <button className="form__submit-button" type="submit">
                <p className="form__submit-title">Сохранить</p>
                <p className="form__submit-loading">Сохранение...</p>
              </button>
              <button className="button button_type_close" type="reset" aria-label="Закрыть"></button>
            </form>
          </div>

        </article>

        <artticle className="popup" id="popupCard">

          <div className="popup__container">

            <form className="form form_type_add-card" method="POST" name="addCardForm" noValidate>
              <h3 className="form__heading">Новое место</h3>

              <section className="form__section">
                <input className="form__item form__item_element_name" type="text" name="name" id="image-name" placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="form__item-error" id="image-name-error"></span>
              </section>

              <section className="form__section">
                <input className="form__item form__item_element_image-link" type="url" name="link" id="image-link" placeholder="Ссылка на картинку" required/>
                <span className="form__item-error" id="image-link-error"></span>
              </section>

              <button className="form__submit-button" type="submit">
                <p className="form__submit-title">Создать</p>
                <p className="form__submit-loading">Сохранение...</p>
              </button>
              <button className="button button_type_close" type="reset" aria-label="Закрыть"></button>
            </form>
          </div>

        </artticle>

        <artticle className="popup" id="popupAvatar">

          <div className="popup__container">

            <form className="form form_type_edit-avatar" method="POST" name="editAvatarForm" noValidate>
              <h3 className="form__heading">Обновить аватар</h3>

              <section className="form__section">
                <input className="form__item form__item_element_image-link" type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required/>
                <span className="form__item-error" id="avatar-error"></span>
              </section>

              <button className="form__submit-button" type="submit">
                <p className="form__submit-title">Сохранить</p>
                <p className="form__submit-loading">Сохранение...</p>
              </button>
              <button className="button button_type_close" type="reset" aria-label="Закрыть"></button>
            </form>
          </div>

        </artticle>

        <artticle className="popup" id="popupDeleteCard">

          <div className="popup__container">

            <form className="form form_type_delete-card" method="POST" name="deleteCardForm" noValidate>
              <h3 className="form__heading">Вы уверены?</h3>

              <button className="form__submit-button" type="submit">Да</button>
              <button className="button button_type_close" type="reset" aria-label="Закрыть"></button>
            </form>
          </div>

        </artticle>

        <artticle className="popup" id="popupImagePrevie">

          <div className="popup__container">
            <figure className="figure">
              <figcaption className="figure__figcaption">
                <img className="figure__image" src="#" alt="шаблон"/>
                <p className="figure__caption"></p>
              </figcaption>
              <button className="button button_type_close" type="reset" aria-label="Закрыть"></button>
            </figure>
          </div>

        </artticle>

      </div>

    </div>

  );
}

export default App;
