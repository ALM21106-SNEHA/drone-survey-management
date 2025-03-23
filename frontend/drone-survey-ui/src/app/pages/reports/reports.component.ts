import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  columns: string[] = [
    'ID', 'Name', 'Model', 'Status', 'Battery', 'Altitude', 'Speed', 'Location', 'Last Updated'
  ];

  drones = [
    { id: 1, name: 'DJI Phantom', model: 'Phantom 4 Pro', status: 'Active', battery: 85, altitude: 100, speed: 30, latitude: '12.9716° N', longitude: '77.5946° E', lastUpdated: '2025-03-22 10:30 AM' },
    { id: 2, name: 'Parrot Anafi', model: 'Anafi', status: 'Inactive', battery: 60, altitude: 50, speed: 20, latitude: '13.0827° N', longitude: '80.2707° E', lastUpdated: '2025-03-22 09:15 AM' },
    { id: 3, name: 'Mavic Air', model: 'Mavic Air 2', status: 'Active', battery: 92, altitude: 120, speed: 40, latitude: '28.7041° N', longitude: '77.1025° E', lastUpdated: '2025-03-22 11:00 AM' },
    { id: 4, name: 'Yuneec Typhoon', model: 'Typhoon H', status: 'Active', battery: 75, altitude: 80, speed: 35, latitude: '19.0760° N', longitude: '72.8777° E', lastUpdated: '2025-03-22 10:20 AM' },
    { id: 5, name: 'Autel Evo', model: 'Evo II', status: 'Maintenance', battery: 40, altitude: 30, speed: 15, latitude: '22.5726° N', longitude: '88.3639° E', lastUpdated: '2025-03-21 06:45 PM' }
  ];
}
