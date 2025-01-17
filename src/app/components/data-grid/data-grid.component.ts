import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataSet } from '../../models/dataset.model';
import { Paginator } from '../../helpers/paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EyeIconComponent } from "../../shared/components/eye-icon/eye-icon.component";
import { PersonIconComponent } from "../../shared/components/person-icon/person-icon.component";
import { AlertIconComponent } from "../../shared/components/alert-icon/alert-icon.component";
import { NorthEastIconComponent } from "../../shared/components/north-east-icon/north-east-icon.component";
import { DropdownIconComponent } from "../../shared/components/dropdown-icon/dropdown-icon.component";

@Component({
  selector: 'app-data-grid',
  imports: [CommonModule, FormsModule, EyeIconComponent, PersonIconComponent, AlertIconComponent, NorthEastIconComponent, DropdownIconComponent],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss'
})
export class DataGridComponent {
  constructor(private DataService: DataService) { }
  dataSets: DataSet[] = [];
  paginatedData: DataSet[] = [];
  paginator!: Paginator<DataSet>;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  itemsPerPageOptions: number[] = [5, 10, 20, 50];
  selectedItemsPerPage: number = 5;

  ngOnInit() {
    this.DataService.getDatasets().subscribe((data) => {      
      this.dataSets = data;
    });

    this.paginator = new Paginator(this.dataSets, 5);

    this.updatePaginatedUsers();
  }

  sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortList();
    this.paginator = new Paginator(this.dataSets, 5);
    this.updatePaginatedUsers();
  }

  sortList(): void {
    this.dataSets.sort((a, b) => {
      let comparison = 0;
      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
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

  onItemsPerPageChange(itemsPerPage: number): void {
    this.paginator.itemsPerPage = itemsPerPage;
    this.selectedItemsPerPage = itemsPerPage;
    this.paginatedData = this.paginator.getItemsForCurrentPage;
  }
}
