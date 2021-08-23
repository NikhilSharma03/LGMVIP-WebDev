const mongoose = require("mongoose");

const Classes = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  student: [
    { studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" } },
  ],
});

module.exports = mongoose.model("Classes", Classes);
