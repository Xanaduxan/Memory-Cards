const router = require('express').Router();
const Profile = require('../views/Profile.jsx');
const { Card } = require('../db/models');

router.get('/', (req, res) => {
//   res.json({ name: '234' });
  res.renderComponent(Profile, { title: 'Личный кабинет' });
});

router.post('/', async (req, res) => {
  const { rus, eng, topic } = req.body;
  try {
    const data = await Card.create({ answer: rus, question: eng, topicId: topic });
    console.log(data);
    res.json({ message: ok });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
