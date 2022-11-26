const { validationResult } = require("express-validator");
const { Area } = require("../../Model");

const updateArea = async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    // Param
    const { id } = req.params;

    // find area by id
    const area = await Area.findByPk(id);

    // check if area exist
    if (!area) {
      return res.status(404).json({ message: "Area not found" });
    }

    // update new grade
    const newArea = await area.update({
      ...req.body,
    });

    return res.status(200).json({
      message: "Area updated successfully",
      data: newArea,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { updateArea };
