const express = require('express');
const courseController = require('../app/controllers/courseController');
const Route = express.Router();

Route.get('/create', courseController.create);
Route.post('/store', courseController.store);
Route.get('/:id/edit', courseController.edit);
Route.put('/:id', courseController.update);
Route.get('/:slug', courseController.detail);
Route.get('/', courseController.show);

module.exports = Route;
