const StudentModel = require("./../models/Student");
const ClassModel = require("./../models/Classes");

exports.addStudent = async (req, res) => {
  const { name, className, rollNo } = req.body;
  const student = new StudentModel({
    name,
    className,
    rollNo,
  });

  const classes = await ClassModel.findOne({ className });
  classes.student.push(student);

  try {
    await student.save();
    await classes.save();
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Student created successfully" });
};
