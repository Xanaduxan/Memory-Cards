const router = require('express').Router();
// const { User } = require('../db/models');

const MainPage = require('../views/MainPage.jsx');

router.get('/', async (req, res) => {
  const { user } = res.locals;

  res.renderComponent(MainPage, { user });
});
module.exports = router;
