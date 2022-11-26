const { validationResult } = require("express-validator");
const { Device } = require("../../Model");

const createDevice = async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    // Create new area
    const newDevice = await Device.create({
      ...req.body,
    });

    return res.status(200).json({
      message: "Device created successfully",
      data: newDevice,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { createDevice };
