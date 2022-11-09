const React = require('react');

function Header({ user }) {
  return (
    <>
      {user ? (
        <div className="header-container">
          <ul className="navbar">
          <li className="navbar-item">
              <a className="nav-link" href="/profile">Личный кабинет</a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/topics">Flashcards</a>
            </li>

            <li className="navbar-item">
              <a className="nav-link" href="/logout">Выйти</a>
            </li>


          </ul>
        </div>
      ) : (
        <div className="header-container">
          <ul className="navbar">
            <li className="navbar-item">
              <a className="nav-link" href="/registration">Регистрация</a>
            </li>
            <li className="navbar-item">
              Flashcard
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/authentication">Войти</a>
            </li>
            
          </ul>
        </div>
      )}

    </>
  );
}

module.exports = Header;