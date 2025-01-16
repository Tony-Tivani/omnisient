import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentComponent } from './recent/recent.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ActivityComponent } from './activity/activity.component';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RecentComponent, DataGridComponent, ActivityComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
