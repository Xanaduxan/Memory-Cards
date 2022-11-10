const React = require('react');
const Layout = require('./Layout');

function MainPage({ user }) {
  return (
    <Layout user={user}>
      <div className="promo">
        <div className="promo-welcome"> Welcome</div>
          {user &&(<div className="welcome"><a href="/topics">К выбору тем</a></div>)}
      </div>



    </Layout>
  );
}
module.exports = MainPage;