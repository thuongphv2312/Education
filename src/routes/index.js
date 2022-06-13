const express = require('express');
const routeSite = require('../routes/site');
const routeMe = require('../routes/me');
const routeCourse = require('../routes/course');

function route(app) {
  app.use('/me', routeMe);
  app.use('/course', routeCourse);
  app.use('/', routeSite);
}

module.exports = route;
