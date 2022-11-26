const { validationResult } = require("express-validator");
const { Area } = require("../../Model");

const createArea = async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    // Form data
    const { name, district, division } = req.body;

    // Check Area exist or not
    const newArea = await Area.findAll({ where: { name, district, division } });
    if (newArea.length > 0) {
      return res.status(400).json({
        message: "Area already exists",
      });
    } else {
      // Create new area
      const newArea = await Area.create({
        ...req.body,
      });

      return res.status(200).json({
        message: "Area created successfully",
        data: newArea,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { createArea };
