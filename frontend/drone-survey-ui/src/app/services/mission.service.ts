import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private apiUrl = 'http://localhost:5000'; // Backend URL

  constructor(private http: HttpClient) { }

  createMission(mission: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/missions/createMission`, mission);
  }

  getMissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/missions/getMissions`);
  }

  assignDroneToMission(missionId: number, droneId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/assign-drone/${missionId}`, { drone_id: droneId });
  }
  saveMission(missionData: any): Observable<any> {
    return this.http.post(this.apiUrl, missionData); // POST request to save mission
  }
}
