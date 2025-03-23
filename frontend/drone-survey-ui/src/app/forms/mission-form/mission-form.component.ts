import { Component } from '@angular/core';
import { MissionService } from '../../services/mission.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-mission-form',
  templateUrl: './mission-form.component.html',
  styleUrl: './mission-form.component.css'
})
export class MissionFormComponent {
  ngOnInit() {
    console.log("here in fomor");
  }

  mission = {
    mission_name: '',
    survey_area: { lat: 20.5937, lon: 78.9629 },  // Default survey area
    start_time: '',
    end_time: '',
    flight_path: [
      { lat: 20.5937, lon: 78.9629 },
      { lat: 20.6037, lon: 78.9739 }
    ],
    drone_id: '',
    Status: ''
  };

  constructor(private missionService: MissionService) { }

  onCreateMission() {
    this.missionService.createMission(this.mission).subscribe(response => {
    return 'Mission created successfully';
    }, error => {
      console.error('Error creating mission', error);
    });
  }

}
