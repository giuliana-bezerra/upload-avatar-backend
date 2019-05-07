const routes = require('express').Router({ mergeParams: true });
const record = require('../../../controllers/avatar/record');

routes.post('/', record);

module.exports = routes;
