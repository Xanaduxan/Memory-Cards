const React = require('react');
const Layout = require('./Layout');

function CardPage({user, cards}) {
  return (
    <Layout user={user}>
      {cards.map((card) => (
        <section className="topicList" key={card.id}>
          <div className="card-body">
           
            <a href={`/topics/${card.id}`} className="card-text">
              Card:
              {' '}
              {card.question}
            </a>
          </div>
        </section>
      ))}
    </Layout>
  );
}

module.exports = CardPage;