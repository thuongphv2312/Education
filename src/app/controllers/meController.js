const Course = require('../../app/models/Courses');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class meController {
  index(req, res, next) {
    Course.find()
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new meController();
