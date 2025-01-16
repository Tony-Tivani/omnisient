import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { DataSet } from './models/dataset.model';
import { RecentComponent } from './recent/recent.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ActivityComponent } from './activity/activity.component';

@Component({
  selector: 'app-root',
  // first time seeing this import on this section, it came with latest angular app: Tony
  imports: [RouterOutlet, CommonModule, RecentComponent, DataGridComponent, ActivityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
