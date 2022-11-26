const { Moisture } = require("../../Model");

const getMoistures = async (req, res) => {
  try {
    // Check Moisture exist or not
    const areaList = await Moisture.findAll();

    return res.status(200).json({
      message: "Moisture list",
      data: areaList,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { getMoistures };
