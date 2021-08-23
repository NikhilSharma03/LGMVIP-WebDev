const ClassModel = require("./../models/Classes");

exports.addClasses = async (req, res) => {
  const { className } = req.body;
  const classes = new ClassModel({
    className,
    student: [],
  });

  try {
    await classes.save();
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }

  res.status(200).json({ message: "Class created successfully" });
};
