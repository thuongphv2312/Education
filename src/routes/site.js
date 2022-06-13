const express = require('express');
const siteController = require('../app/controllers/siteController');
const Route = express.Router();

Route.get('/', siteController.index);

module.exports = Route;
