const React = require('react');
const Layout = require('./Layout');

function MainPage({ user }) {
  return (
    <Layout user={user}>
      <div className="promo">
        <div className="promo-welcome">
          <h3>Привет!</h3>
          <h3>Ты на верном пути 😘</h3>
          <h3>приступим к изучению новых слов!</h3>
        </div>
        {user && (<div className="welcome"><a href="/topics">К выбору тем</a></div>)}
      </div>



    </Layout>
  );
}
module.exports = MainPage;