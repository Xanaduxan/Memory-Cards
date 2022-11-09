const React = require('react');
const Layout = require('./Layout');

function TopicPage({user, topics}) {
  return (
    <Layout user={user}>
      {topics.map((topic) => (
        <section className="topicList" key={topic.id}>
          <div className="card-body">
           
            <a href={`/topics/${topic.id}`} className="card-text">
              Topic:
              {' '}
              {topic.title}
            </a>
          </div>
        </section>
      ))}
    </Layout>
  );
}

module.exports = TopicPage;