import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: any;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'ARJUN', weight:'MEARN' , symbol: 'WEB DEVELOPER'},
  {position: 2, name: 'CLINTEN', weight: 'MEARN', symbol: 'WEB DEVELOPER'},
  {position: 3, name: 'HARI', weight: 'MEARN', symbol: 'WEB DEVELOPER'},
  {position: 4, name: 'SANJAY', weight: 'MEARN', symbol: 'WEB DEVELOPER'},
  {position: 5, name: 'FEBIN', weight: 'MEARN', symbol: 'WEB DEVELOPER'},
  {position: 6, name: 'ARUN', weight: 'TESTING', symbol: 'TRAINEE'},
  {position: 7, name: 'AMAL', weight: 'JAVA', symbol: 'TRAINER'},
  {position: 8, name: 'ALIN', weight: 'PYTHON', symbol: 'ASSISTANT TRAINER'},
  {position: 9, name: 'BARJISH', weight: 'FLUTTER', symbol: 'FLUTTER TRAINEE'},
  {position: 10, name: 'VINAYAK', weight: 'MEARN', symbol: 'SOFTWARE DEVELOPER'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
