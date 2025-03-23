const DroneService = require("../services/drone.service");

class DroneController {
  constructor(db) {
    this.droneService = new DroneService(db);
  }

  createDrone = async (req, res) => {
    try {
      const { name, type, status } = req.body;
      const newDrone = await this.droneService.createDrone(name, type, status);
      res.status(201).json(newDrone);
    } catch (error) {
      console.error("Error creating drone:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  getAllDrones = async (req, res) => {
    try {
      const drones = await this.droneService.getAllDrones();
      res.json(drones);
    } catch (error) {
      console.error("Error fetching drones:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

module.exports = DroneController;
