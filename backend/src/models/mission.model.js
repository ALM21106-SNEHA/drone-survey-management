class MissionModel {
  constructor(db) {
    this.db = db;
  }

  // async createMission(drone_id, start_time,end_time) {
  //   const query = "INSERT INTO missions (drone_id, location, status) VALUES ($1, $2, $3) RETURNING *";
  //   const values = [drone_id, 'India', 'Active'];
  //   const result = await this.db.query(query, values);
  //   return result.rows[0];
  // }


  async createMission(mission) {
    console.log(mission, 'mission');
    const validStatuses = ["pending", "in-progress", "completed", "failed"];
    const status = validStatuses.includes(mission.status) ? mission.status : "pending";

    const { drone_id, mission_name, survey_area, start_time, end_time, flight_path } = mission;

    const query = `
      INSERT INTO missions (drone_id, mission_name, location, survey_area, start_time, end_time, flight_path, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;
    `;
    console.log(survey_area, "sdb");

    const values = [
      drone_id,
      mission_name,
      JSON.stringify(survey_area),  // You can convert location to string if needed
      `(${survey_area['lat']}, ${survey_area['lon']})`,  // Store survey_area as a point
      start_time,
      end_time,
      flight_path.map(p => `(${p['lat']}, ${p['lon']})`),  // Convert flight_path to points array
      status,
    ];

    try {
      const result = await this.db.query(query, values);
      console.log("Mission inserted with ID:", result.rows[0].id);
    } catch (error) {
      console.error("Error inserting mission:", error);
    }
  };
  async getAllMissions() {
    const result = await this.db.query("SELECT * FROM missions");
    return result.rows;
  }
}

module.exports = MissionModel;
