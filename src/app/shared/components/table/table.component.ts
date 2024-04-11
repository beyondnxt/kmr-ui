import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableHeaders: any = [];
  @Input() tableValues: any = [];
  @Input() fixedTableHeader: any = [];
}
