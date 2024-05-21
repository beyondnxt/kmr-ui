import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-check-box',
  templateUrl: './custom-check-box.component.html',
  styleUrls: ['./custom-check-box.component.scss']
})
export class CustomCheckBoxComponent {
  @Input() menus:any
  @Output() selectedMenu = new EventEmitter();
}
