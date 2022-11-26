const { Device } = require("../../Model");

const deleteDevice = async (req, res) => {
  try {
    const { id } = req.params;
    // Check area is belongs to the user
    const area = await Device.findByPk(id);
    if (!area) {
      return res.status(404).json({ message: "Device not found" });
    }

    // Delete dvice
    await area.destroy();

    return res.status(200).json({
      message: "Device deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { deleteDevice };
