const MissionService = require("../services/mission.service");

class MissionController {
  constructor(db) {
    this.missionService = new MissionService(db);
  }

  createMission = async (req, res) => {
    try {
      const newMission = await this.missionService.createMission(req.body);
      res.status(201).json(newMission);
    } catch (error) {
      console.error("Error creating mission:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  getAllMissions = async (req, res) => {
    try {
      const missions = await this.missionService.getAllMissions();
      res.json(missions);
    } catch (error) {
      console.error("Error fetching missions:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
}

module.exports = MissionController;
