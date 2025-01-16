import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Activity } from '../models/activity.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  imports: [CommonModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  constructor(private DataService: DataService) { }
  activities: Activity[] = [];

  ngOnInit() {
    this.DataService.getActivites().subscribe((data) => {
      this.activities = data;
    });
  }
}
