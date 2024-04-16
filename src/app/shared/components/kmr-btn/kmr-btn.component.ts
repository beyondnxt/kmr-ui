import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-kmr-btn',
  templateUrl: './kmr-btn.component.html',
  styleUrls: ['./kmr-btn.component.scss']
})
export class KmrBtnComponent {
  @Input() label = '';
  @Input() bgColor = '#5c46dc';
  @Input() color = '#ffff';
  @Output() action = new EventEmitter();
}
