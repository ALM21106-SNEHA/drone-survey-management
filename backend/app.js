const express = require('express');
const cors = require('cors');
const {attachDB}  = require('./src/config/db'); //  Import the database connection

const app = express();
app.use(attachDB)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const droneRoutes = require('./src/routes/drone.routes');
app.use('/api/drones', droneRoutes);

const missionRoutes = require('./src/routes/mission.routes');
app.use('/api/missions', missionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
