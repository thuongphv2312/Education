const Course = require('../models/Courses');
const {
  mongooseToObject,
  multipleMongooseToObject,
} = require('../../utils/mongoose');
class courseController {
  show(req, res, next) {
    Course.find({}).then((courses) =>
      res
        .render('courses/show', { courses: multipleMongooseToObject(courses) })
        .catch(next),
    );
  }

  detail(req, res, next) {
    Course.findOne({ slug: req.params.slug }).then((course) =>
      res
        .render('courses/detail', { course: mongooseToObject(course) })
        .catch(next),
    );
  }

  //get course/create
  create(reg, res) {
    res.render('courses/create');
  }
  //post course/store
  store(req, res) {
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    course.save();
    res.redirect('/course');
  }

  //get course/:id/update
  edit(req, res, next) {
    Course.findById({ _id: req.params.id })
      .then((course) =>
        res.render('courses/update', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  //put course/:id
  update(req, res, next) {
    res.json(req.body);
  }
}

module.exports = new courseController();
