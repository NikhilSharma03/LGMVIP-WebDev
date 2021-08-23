const StudentModel = require("./../models/Student");
const ClassModel = require("./../models/Classes");
const MarksModel = require("./../models/Marks");

exports.addMarks = async (req, res) => {
  const { name, className, rollNo, math, science, history, music } = req.body;
  const student = await StudentModel.findOne({ className, name, rollNo });
  if (!student) {
    return res.status(404).json({ message: "No Student Found" });
  }
  const newmarks = new MarksModel({
    student: student,
    math,
    science,
    history,
    music,
  });

  try {
    await newmarks.save();
  } catch (err) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }

  res.status(200).json({ message: "Marks Added Successfully" });
};

exports.viewMarks = async (req, res) => {
  const { name, className, rollNo } = req.body;
  const student = await StudentModel.findOne({ className, name, rollNo });
  if (!student) {
    return res.status(404).json({ message: "No Student Found" });
  }
  const marks = await MarksModel.findOne({ student }).populate("student");
  if (!marks) {
    return res.status(404).json({ message: "No Result Found" });
  }

  res.status(200).json({ message: "Result Found", result: marks });
};
