const { Op } = require("sequelize");
const { Batch, Grade, Student, Shift } = require("../../Model");

const getDashboard = async (req, res) => {
  try {
    // Check Batch exist or not
    const batchCount = await Batch.count({
      where: {
        del: false,
      },
    });
    const gradeCount = await Grade.count({
      where: {
        del: false,
      },
    });
    const shiftCount = await Shift.count({
      where: {
        del: false,
      },
    });
    const studentCount = await Student.count({
      where: {
        del: false,
      },
    });

    return res.status(200).json({
      message: "Admin data",
      data: {
        batch: batchCount,
        grade: gradeCount,
        student: studentCount,
        shift: shiftCount,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { getDashboard };
