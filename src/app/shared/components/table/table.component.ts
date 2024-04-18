import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';  

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  pos: any
  release: boolean = true;
  @Input() tableHeaders: any = [];
  @Input() tableValues: any = [];
  @Input() fixedTableHeader: any = [];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent: PageEvent | undefined;
  handlePageEvent(e: PageEvent) {
  }
  handleStatusColor(status: string) {
    switch (status) {
      case 'Active':
        return '#4DB6AC';
      default:
        return '#000000';
    }
  }
  dropCol(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.tableHeaders,
      event.previousIndex,
      event.currentIndex
    );
  }
  mouseDown(event: any, el: any = null) {
    el = el || event.target;
    this.pos = {
      x: el.getBoundingClientRect().left - event.clientX + 'px',
      y: el.getBoundingClientRect().top - event.clientY + 'px',
      width: el.getBoundingClientRect().width + 'px',
    };
  }
}


