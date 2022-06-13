const express = require('express');
const Route = express.Router();
const meController = require('../app/controllers/meController');

Route.get('/stored/courses', meController.index);

module.exports = Route;
