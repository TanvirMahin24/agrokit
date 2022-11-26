const { Area } = require("../../Model");

const getAreas = async (req, res) => {
  try {
    // Check Area exist or not
    const areaList = await Area.findAll();

    return res.status(200).json({
      message: "Area list",
      data: areaList,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { getAreas };
