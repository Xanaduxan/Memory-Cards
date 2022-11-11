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
    // console.log(joinTable);
    const endCards = joinTable.filter((el) => user.id !== el.userId && !el['Results.result']);
    res.renderComponent(CardPage, { user, endCards });
  } catch (e) {
    console.log(e.message);
  }
});

router.delete('/:topicId/:id', async (req, res) => {
  try {
    const { user } = res.locals;
    const { topicId, id } = req.params;
    const add = await Result.create({
      userId: user.id, result: true, topicId, cardId: id,
    });
    res.json(add);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
