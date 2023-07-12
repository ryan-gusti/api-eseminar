const express = require("express");
const router = express();
const { createCMSOrganizer } = require("./controller");

router.post("/organizers", createCMSOrganizer);

module.exports = router;
