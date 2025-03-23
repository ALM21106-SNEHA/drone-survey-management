import { Component } from '@angular/core';
import { MissionService } from '../../services/mission.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.css'
})
export class MissionsComponent {
  mission = {
    mission_name: '',
    start_time: '',
    end_time: '',
    survey_area: { lat: null, lon: null }
  };

  constructor(private missionService: MissionService) {}

  ngOnInit(): void {
    // You can fetch initial mission data here if needed.
  }

  saveMission(): void {
    // Call the service to save the mission data
    this.missionService.saveMission(this.mission).subscribe(response => {
      console.log('Mission saved', response);
    });
  }
}
