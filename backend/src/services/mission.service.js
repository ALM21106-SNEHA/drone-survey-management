const MissionModel = require("../models/mission.model");

class MissionService {
  constructor(db) {
    this.missionModel = new MissionModel(db);
  }

  async createMission(mission) {
    return await this.missionModel.createMission(mission);
  }

  async getAllMissions() {
    return await this.missionModel.getAllMissions();
  }
}

module.exports = MissionService;
