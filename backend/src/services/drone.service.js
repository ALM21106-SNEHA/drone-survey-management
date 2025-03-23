const DroneModel = require("../models/drone.model");

class DroneService {
  constructor(db) {
    this.droneModel = new DroneModel(db);
  }

  async createDrone(name, type, status) {
    return await this.droneModel.createDrone(name, type, status);
  }

  async getAllDrones() {
    return await this.droneModel.getAllDrones();
  }

  async getDroneById(id) {
    return await this.droneModel.getDroneById(id);
  }
}

module.exports = DroneService;
