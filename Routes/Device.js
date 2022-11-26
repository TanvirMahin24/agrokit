const express = require("express");
const passport = require("passport");

const { createDevice } = require("../Controller/Device/createDevice");
const { getDevices } = require("../Controller/Device/getDevice");
const { deleteDevice } = require("../Controller/Device/deleteDevice");
const { updateDevice } = require("../Controller/Device/updateDevice");

const router = express.Router();

// Grade Routes

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createDevice
);

router.get("/", getDevices);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteDevice
);
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateDevice
);

module.exports = router;
