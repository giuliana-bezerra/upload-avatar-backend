const avatar = require('./avatar');
const router = require('express').Router();

router.use('/avatar', avatar);

module.exports = router;