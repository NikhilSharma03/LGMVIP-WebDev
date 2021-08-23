const mongoose = require("mongoose");

const Student = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", Student);
