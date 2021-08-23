const mongoose = require("mongoose");

const Marks = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  math: {
    type: String,
    required: true,
  },
  history: {
    type: String,
    required: true,
  },
  science: {
    type: String,
    required: true,
  },
  music: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Marks", Marks);
