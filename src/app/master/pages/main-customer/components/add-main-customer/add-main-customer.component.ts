import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-main-customer',
  templateUrl: './add-main-customer.component.html',
  styleUrls: ['./add-main-customer.component.scss']
})
export class AddMainCustomerComponent {
  constructor(private fb: FormBuilder) { }
  mainCustomerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    code: ['', [Validators.required]],
    type: ['',[Validators.required]],
    country: ['',[Validators.required]]
  })

}
