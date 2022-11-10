const React = require('react');
const Layout = require('./Layout');

function CardPage({user, endCards}) {
  return (
    <Layout user={user}>
      <div className='topic-list'>
      {endCards.map((endCard) => (
        <section className="topicList" key={endCard.id}>
          <div className="card-body">
           
            <a href={`/topics/${endCard.id}`} className="card-text">
              Card:
              {' '}
              {endCard.question}
            </a>
          </div>
        </section>
      ))}
      </div>
    </Layout>
  );
}

module.exports = CardPage;