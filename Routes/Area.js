const express = require("express");
const passport = require("passport");

const { createArea } = require("../Controller/Area/createArea");
const { getAreas } = require("../Controller/Area/getArea");
const { deleteArea } = require("../Controller/Area/deleteArea");
const { updateArea } = require("../Controller/Area/updateArea");

const router = express.Router();

// Grade Routes

router.post("/", passport.authenticate("jwt", { session: false }), createArea);

router.get("/", getAreas);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteArea
);
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateArea
);

module.exports = router;
