const express = require("express");
const DroneController = require("../controllers/drone.controller");

const router = express.Router();

router.post("/drones", (req, res) => new DroneController(req.app.locals.db).createDrone(req, res));
router.get("/drones", (req, res) => new DroneController(req.app.locals.db).getAllDrones(req, res));

module.exports = router;
