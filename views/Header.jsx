const React = require('react');

function Header({ user }) {
  return (
    <header>
      {user ? (
        <div className="header-container">
          <ul className="navbar">
            <li className="navbar-item">
              <a className="nav-link" href="/profile">Личный кабинет</a>
            </li>
            <li className="navbar-item">
              <a className="nav-link flash" href="/topics">MemoryCards</a>
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
              <div className="nav-div flash">MemoryCards</div>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/authentication">Войти</a>
            </li>

          </ul>
        </div>
      )}

    </header>
  );
}

module.exports = Header;