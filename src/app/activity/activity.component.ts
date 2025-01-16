import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Activity } from '../models/activity.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  imports: [CommonModule],
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  activities: Activity[] = [];
  showAll: boolean = false;  // Track whether to show all activities

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getActivites().subscribe((data) => {
      this.activities = data;
    });
  }

  toggleShowAll() {
    this.showAll = !this.showAll;  // Toggle between showing all and 3 items
  }
}
