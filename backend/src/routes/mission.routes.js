const express = require("express");
const MissionController = require("../controllers/mission.controller");

const router = express.Router();

router.post("/createMission", (req, res) => new MissionController(req.app.locals.db).createMission(req, res));
router.get("/getMissions", (req, res) => new MissionController(req.app.locals.db).getAllMissions(req, res));

module.exports = router;
