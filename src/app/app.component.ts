import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DropdownIconWhiteComponent } from "./shared/components/dropdown-icon-white/dropdown-icon-white.component";
import { RecentComponent } from './components/recent/recent.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { ActivityComponent } from './components/activity/activity.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RecentComponent, DataGridComponent, ActivityComponent, NavbarComponent, DropdownIconWhiteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
