const router = require('express').Router();
const { Topic, Card, Result } = require('../db/models');
const CardPage = require('../views/CardPage.jsx');
const TopicPage = require('../views/TopicPage.jsx');

router.get('/', async (req, res) => {
  const { user } = res.locals;

  const topics = await Topic.findAll({});
  res.renderComponent(TopicPage, { user, topics });
});

router.get('/:id', async (req, res) => {
  const { user } = res.locals;
  const { id } = req.params;
  try {
    const cards = await Card.findAll({ raw: true, where: { topicId: id } });
    console.log(cards);
    const joinTable = await Card.findAll({raw: true,
      include: {
        model: Result,
        // where: { Cards.topicId: { Result.topicId } },
      },
    });
    const endCards = joinTable.filter((el) => el.topicId !== id && user.id !== el.userId);
    console.log(endCards);
    res.renderComponent(CardPage, { user, endCards });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;