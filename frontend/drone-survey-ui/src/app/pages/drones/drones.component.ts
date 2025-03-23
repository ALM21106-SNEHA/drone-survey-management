import { Component } from '@angular/core';

@Component({
  selector: 'app-drones',
  templateUrl: './drones.component.html',
  styleUrl: './drones.component.css'
})
export class DronesComponent {
  drones = [
    { id: 1, name: 'DJI Phantom', model: 'Phantom 4 Pro', status: 'Active', battery: 85, altitude: 100, speed: 30, latitude: '12.9716° N', longitude: '77.5946° E', lastUpdated: '2025-03-22 10:30 AM' },
    { id: 2, name: 'Parrot Anafi', model: 'Anafi', status: 'Inactive', battery: 60, altitude: 50, speed: 20, latitude: '13.0827° N', longitude: '80.2707° E', lastUpdated: '2025-03-22 09:15 AM' },
    { id: 3, name: 'Mavic Air', model: 'Mavic Air 2', status: 'Active', battery: 92, altitude: 120, speed: 40, latitude: '28.7041° N', longitude: '77.1025° E', lastUpdated: '2025-03-22 11:00 AM' },
    { id: 4, name: 'Yuneec Typhoon', model: 'Typhoon H', status: 'Active', battery: 75, altitude: 80, speed: 35, latitude: '19.0760° N', longitude: '72.8777° E', lastUpdated: '2025-03-22 10:20 AM' },
    { id: 5, name: 'Autel Evo', model: 'Evo II', status: 'Maintenance', battery: 40, altitude: 30, speed: 15, latitude: '22.5726° N', longitude: '88.3639° E', lastUpdated: '2025-03-21 06:45 PM' },
    { id: 6, name: 'Skydio 2', model: 'Skydio 2+', status: 'Inactive', battery: 55, altitude: 60, speed: 25, latitude: '25.3176° N', longitude: '82.9739° E', lastUpdated: '2025-03-21 08:30 PM' },
    { id: 7, name: 'DJI Inspire', model: 'Inspire 2', status: 'Active', battery: 88, altitude: 110, speed: 50, latitude: '23.8103° N', longitude: '90.4125° E', lastUpdated: '2025-03-22 10:10 AM' },
    { id: 8, name: 'Holy Stone', model: 'HS720', status: 'Inactive', battery: 35, altitude: 20, speed: 10, latitude: '18.5204° N', longitude: '73.8567° E', lastUpdated: '2025-03-20 05:00 PM' },
    { id: 9, name: 'Ryze Tello', model: 'Tello', status: 'Active', battery: 95, altitude: 150, speed: 60, latitude: '37.7749° N', longitude: '122.4194° W', lastUpdated: '2025-03-22 11:30 AM' },
    { id: 10, name: 'Walkera Voyager', model: 'Voyager 4', status: 'Maintenance', battery: 45, altitude: 40, speed: 12, latitude: '40.7128° N', longitude: '74.0060° W', lastUpdated: '2025-03-21 07:45 PM' },
    { id: 11, name: 'DJI Mini', model: 'Mini 3 Pro', status: 'Active', battery: 98, altitude: 160, speed: 70, latitude: '34.0522° N', longitude: '118.2437° W', lastUpdated: '2025-03-22 12:00 PM' },
    { id: 12, name: 'Parrot Bebop', model: 'Bebop 2', status: 'Inactive', battery: 30, altitude: 15, speed: 8, latitude: '51.5074° N', longitude: '0.1278° W', lastUpdated: '2025-03-19 04:20 PM' },
    { id: 13, name: 'Autel Robotics', model: 'Evo Nano+', status: 'Active', battery: 82, altitude: 90, speed: 33, latitude: '35.6895° N', longitude: '139.6917° E', lastUpdated: '2025-03-22 09:50 AM' },
    { id: 14, name: 'Hubsan Zino', model: 'Zino 2+', status: 'Active', battery: 79, altitude: 75, speed: 28, latitude: '41.9028° N', longitude: '12.4964° E', lastUpdated: '2025-03-22 09:40 AM' },
    { id: 15, name: 'DJI Air', model: 'Air 2S', status: 'Maintenance', battery: 50, altitude: 45, speed: 20, latitude: '48.8566° N', longitude: '2.3522° E', lastUpdated: '2025-03-21 07:00 PM' },
  ];

  displayedColumns: string[] = ['id', 'name', 'model', 'status', 'battery', 'altitude', 'speed', 'latitude', 'longitude', 'lastUpdated'];
}
