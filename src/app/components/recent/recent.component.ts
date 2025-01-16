import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EyeIconComponent } from '../../shared/components/eye-icon/eye-icon.component';
import { DataSet } from '../../models/dataset.model';
import { Paginator } from '../../helpers/paginator';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-recent',
  imports: [CommonModule, EyeIconComponent],
  templateUrl: './recent.component.html',
  styleUrl: './recent.component.scss'
})
export class RecentComponent {
  constructor(private DataService: DataService) { }
  dataSets: DataSet[] = [];
  paginatedData: DataSet[] = [];
  paginator!: Paginator<DataSet>;
  hoveredItem: any = null;

  ngOnInit() {
    this.DataService.getDatasets().subscribe((data) => {      
      this.dataSets = data.sort((a, b) => b.createDate.getTime() - a.createDate.getTime());
    });

    this.paginator = new Paginator(this.dataSets, 4);

    this.updatePaginatedUsers();
  }

  sortedDataSets(data: DataSet[]) {
    return data.sort((a, b) => 
      b.createDate.getTime() - a.createDate.getTime());
  }

  updatePaginatedUsers(): void {
    this.paginatedData = this.paginator.getItemsForCurrentPage;
  }

  nextPage(): void {
    this.paginator.nextPage();
    this.paginatedData = this.paginator.getItemsForCurrentPage;
  }

  previousPage(): void {
    this.paginator.previousPage();
    this.paginatedData = this.paginator.getItemsForCurrentPage;
  }
}
