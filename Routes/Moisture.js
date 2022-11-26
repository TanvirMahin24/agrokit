const express = require("express");
const passport = require("passport");

const { createDevice } = require("../Controller/Device/createDevice");
const { getDevices } = require("../Controller/Device/getDevice");
const { deleteDevice } = require("../Controller/Device/deleteDevice");
const { updateDevice } = require("../Controller/Device/updateDevice");
const { createMoisture } = require("../Controller/Moisture/createMoisture");
const { getMoistures } = require("../Controller/Moisture/getMoisture");
const { deleteMoisture } = require("../Controller/Moisture/deleteMoisture");
const { updateMoisture } = require("../Controller/Moisture/updateMoisture");

const router = express.Router();

// Grade Routes

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createMoisture
);

router.get("/", getMoistures);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteMoisture
);
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateMoisture
);

module.exports = router;
