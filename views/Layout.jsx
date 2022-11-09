const React = require('react');

const Header = require('./Header');


function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script defer src='./js/profile.js'></script>
        <title>Memory cards</title>
      </head>
      <body>
        <Header user={user} />
        {children}
      </body>
    </html>
  );
}
module.exports = Layout;