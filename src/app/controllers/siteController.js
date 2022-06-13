const Course = require('../models/Courses');
const siteController = {
  index(req, res) {
    res.render('home');
  },
};

module.exports = siteController;
