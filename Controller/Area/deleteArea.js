const { Area } = require("../../Model");

const deleteArea = async (req, res) => {
  try {
    const { id } = req.params;
    // Check area is belongs to the user
    const area = await Area.findByPk(id);
    if (!area) {
      return res.status(404).json({ message: "Area not found" });
    }

    // Delete grade
    await area.destroy();

    return res.status(200).json({
      message: "Area deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { deleteArea };
