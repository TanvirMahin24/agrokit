const { validationResult } = require("express-validator");
const { Moisture } = require("../../Model");

const createMoisture = async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    // Create new area
    const newMoisture = await Moisture.create({
      ...req.body,
    });

    return res.status(200).json({
      message: "Moisture created successfully",
      data: newMoisture,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { createMoisture };
