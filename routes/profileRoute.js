const router = require('express').Router();
const Profile = require('../views/Profile.jsx');

router.get('/', (req, res) => {
//   res.json({ name: '234' });
  res.renderComponent(Profile, { title: 'Личный кабинет' });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.json({ ok: 'ok' });
});

module.exports = router;
