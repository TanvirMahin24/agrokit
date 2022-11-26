const { validPassword } = require("../../Utils/hashPassword");
const { validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const { User } = require("../../Model");

const loginController = async (req, res) => {
  try {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    // Form data
    const { password, email } = req.body;
    // Check User exist or not
    const newUser = await User.findAll({
      where: { email },
    });
    console.log(email);
    if (newUser[0]) {
      let isValid = validPassword(
        password,
        newUser[0].password,
        newUser[0].salt.toString()
      );
      if (isValid) {
        const payload = {
          name: newUser[0].name,
          id: newUser[0].id,
        };

        const token = jwt.sign(payload, process.env.JWT, { expiresIn: "90d" });

        return res.status(200).json({
          message: "Login succcess",
          data: {
            name: newUser[0].dataValues.name,
            email: newUser[0].dataValues.email,
            token,
          },
        });
      }

      return res.status(400).json({
        message: "Password invalid",
      });
    } else {
      // email invalid
      return res.status(400).json({
        message: "Email invalid",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
      data: error.message,
    });
  }
};

module.exports = { loginController };
