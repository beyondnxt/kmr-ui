import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-main-customer',
  templateUrl: './add-main-customer.component.html',
  styleUrls: ['./add-main-customer.component.scss']
})
export class AddMainCustomerComponent {
  constructor(private fb: FormBuilder) { }
  mainCustomerForm = this.fb.group({
    name:[''],
    code:[''],
    type:[''],
    country:['']
  })

}
