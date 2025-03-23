import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drone-survey-ui';
  @ViewChild('sidenav') sidebar!: SidebarComponent;

  toggleSidebar() {
    if (this.sidebar) {
      this.sidebar.toggle(); // ✅ Call the correct method
    }
  }
}
