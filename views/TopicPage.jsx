const React = require('react');
const Layout = require('./Layout');

function TopicPage({ user, topics }) {
  return (
    <Layout user={user}>
      <div className='topic-list'>
        {topics.map((topic) => (
          <section className="topic" key={topic.id}>
            <div className="card-body">

              <a href={`/topics/${topic.id}`} className="card-text">
                {topic.title}
              </a>
            </div>
          </section>
        ))}
      </div>

    </Layout>
  );
}

module.exports = TopicPage;