const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/education');
    console.log('Connect to database successful!');
  } catch (error) {
    console.log('Connect fail!');
  }
}

module.exports = { connect };
