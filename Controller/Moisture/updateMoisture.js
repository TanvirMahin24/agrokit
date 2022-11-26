const { validationResult } = require("express-validator");
const { Moisture } = require("../../Model");

const updateMoisture = async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    // Param
    const { id } = req.params;

    // find moist by id
    const moist = await Moisture.findByPk(id);

    // check if moist exist
    if (!moist) {
      return res.status(404).json({ message: "Moisture not found" });
    }

    // update new grade
    const newMoisture = await moist.update({
      ...req.body,
    });

    return res.status(200).json({
      message: "Moisture updated successfully",
      data: newMoisture,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { updateMoisture };
