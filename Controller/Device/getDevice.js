const { Device } = require("../../Model");

const getDevices = async (req, res) => {
  try {
    // Check Device exist or not
    const areaList = await Device.findAll();

    return res.status(200).json({
      message: "Device list",
      data: areaList,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { getDevices };
