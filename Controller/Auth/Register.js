const { genPassword } = require("../../Utils/hashPassword");
const { validationResult } = require("express-validator");
const { User } = require("../../Model");

const registerController = async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    // Form data
    const { name, password, email } = req.body;

    // Check User exist or not
    const newUser = await User.findAll({ where: { email } });
    if (newUser.length > 0) {
      return res.status(400).json({
        message: "User already exist",
      });
    } else {
      // Create new user
      const passHash = genPassword(password);
      const newUser = await User.create({
        name,
        email,
        password: passHash.hash,
        salt: passHash.salt,
      });

      return res.status(200).json({
        message: "User created successfully",
        data: { ...newUser.dataValues, password: null, salt: null },
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { registerController };
