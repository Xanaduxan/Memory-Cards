const React = require('react');
const Layout = require('./Layout');

function CardPage({ user, endCards }) {
  return (
    <Layout user={user}>
      <section className="section">
      {endCards.map((endCard) => (
        
        <section data-topicid={endCard.topicId} data-id={endCard.id} className="topicList" key={endCard.id}>
          <div className="card center">
            <div className="front">
              <div className="card-body">
                  Card:
                  {' '}
                  {endCard.question}
              </div>
            </div>

            <div className="back">
              <div className="back-content center">
                answer:
                {' '}
                {endCard.answer}
              </div>
              <button className="button">Изучено</button>
            </div>
          </div>
        </section>
      ))}
      </section>
    </Layout>
  );
}

module.exports = CardPage;