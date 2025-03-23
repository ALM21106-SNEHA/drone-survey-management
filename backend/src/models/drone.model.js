class DroneModel {
    constructor(db) {
      this.db = db;
    }
  
    async createDrone(name, type, status) {
      const query = "INSERT INTO drones (name, type, status) VALUES ($1, $2, $3) RETURNING *";
      const values = [name, type, status];
      const result = await this.db.query(query, values);
      return result.rows[0];
    }
  
    async getAllDrones() {
      const result = await this.db.query("SELECT * FROM drones");
      return result.rows;
    }
  
    async getDroneById(id) {
      const result = await this.db.query("SELECT * FROM drones WHERE id = $1", [id]);
      return result.rows[0];
    }
  }
  
  module.exports = DroneModel;
  