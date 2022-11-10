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
    const joinTable = await Card.findAll({
      raw: true,
      where: { topicId: id },
      include: [
        {
          model: Result,
        },
      ],
    });
    const endCards = joinTable.filter((el) => el.topicId !== id && user.id !== el.userId);
    res.renderComponent(CardPage, { user, endCards });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
