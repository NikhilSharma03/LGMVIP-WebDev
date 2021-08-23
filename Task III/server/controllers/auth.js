const bcrypt = require("bcryptjs");
const StudentModel = require("./../models/StudentSignUp");
const TeacherModel = require("./../models/TeacherSignUp");

exports.studentSignUp = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const student = new StudentModel({
    email,
    password: hashedPassword,
  });

  try {
    await student.save();
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }

  res
    .status(200)
    .json({ message: "Account created successfully", user: student });
};

exports.teacherSignUp = async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const teacher = new TeacherModel({
    email,
    password: hashedPassword,
  });

  try {
    await teacher.save();
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }

  res
    .status(200)
    .json({ message: "Account created successfully", user: teacher });
};

exports.studentLogin = async (req, res) => {
  const { email, password } = req.body;
  const isEmailExist = await StudentModel.findOne({ email });
  if (!isEmailExist) {
    return res.status(404).json({ message: "No email exists" });
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    isEmailExist.password
  );

  if (!isPasswordCorrect) {
    return res.status(404).json({ message: "Wrong Password" });
  }

  res
    .status(200)
    .json({ message: "Account login successfully", user: isEmailExist });
};

exports.teacherLogin = async (req, res) => {
  const { email, password } = req.body;
  const isEmailExist = await TeacherModel.findOne({ email });
  if (!isEmailExist) {
    return res.status(404).json({ message: "No email exists" });
  }
  const isPasswordCorrect = await bcrypt.compare(
    password,
    isEmailExist.password
  );

  if (!isPasswordCorrect) {
    return res.status(404).json({ message: "Wrong Password" });
  }

  res
    .status(200)
    .json({ message: "Account login successfully", user: isEmailExist });
};
