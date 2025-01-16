import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { DataSet } from './models/dataset.model';
import { RecentComponent } from './recent/recent.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ActivityComponent } from './activity/activity.component';
import { NorthEastIconComponent } from "./shared/components/north-east-icon/north-east-icon.component";
import { NotificationIconComponent } from "./shared/components/notification-icon/notification-icon.component";

@Component({
  selector: 'app-root',
  // first time seeing this import on this section, it came with latest angular app: Tony
  imports: [RouterOutlet, CommonModule, RecentComponent, DataGridComponent, ActivityComponent, NorthEastIconComponent, NotificationIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
