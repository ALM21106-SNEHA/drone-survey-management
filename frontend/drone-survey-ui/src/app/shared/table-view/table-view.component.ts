import { Component } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css'
})
export class TableViewComponent {
  drones = [
    { id: 'D1', status: 'In Use', location: 'Mumbai', battery: 80 },
    { id: 'D2', status: 'Charging', location: 'Delhi', battery: 45 },
    { id: 'D3', status: 'Idle', location: 'Bangalore', battery: 90 },
    { id: 'D4', status: 'In Use', location: 'Kolkata', battery: 60 },
    { id: 'D5', status: 'Maintenance', location: 'Chennai', battery: 100 }
  ];
  displayedColumns: string[] = ['id', 'status', 'location', 'battery', 'action'];

  // Method to track a drone
  trackDrone(droneId: string) {
    alert('Tracking Drone: ' + droneId);
  }
}
