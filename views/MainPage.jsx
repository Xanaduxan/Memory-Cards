const React = require('react');
const Layout = require('./Layout');

function MainPage({ user }) {
  return (
    <Layout>
<div> Welcome</div>
{user &&(<a href="/topics">К выбору тем</a>)}


    </Layout>
  );
}
module.exports = MainPage;