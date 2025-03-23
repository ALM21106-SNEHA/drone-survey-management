import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  settings = {
    theme: 'light',
    notifications: true,
    language: 'en',
    autoUpdate: false
  };

  saveSettings() {
    console.log('Settings Saved:', this.settings);
    alert('Settings saved successfully!');
  }

}
