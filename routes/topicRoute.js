const router = require('express').Router();
const {Topic} = require('../db/models')

const TopicPage = require('../views/TopicPage.jsx');

router.get('/', async (req, res) => {
  const { user } = res.locals;

  const topics = await Topic.findAll({});
  res.renderComponent(TopicPage, { user, topics });
});
module.exports = router;
