const router = require('express').Router();
const { Topic, Card } = require('../db/models');
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
    const cards = await Card.findAll({ raw: true });
    console.log(cards);
    res.renderComponent(CardPage, { user, cards });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
