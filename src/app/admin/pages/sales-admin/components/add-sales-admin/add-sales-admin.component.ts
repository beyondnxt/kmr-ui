import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';

@Component({
  selector: 'app-add-sales-admin',
  templateUrl: './add-sales-admin.component.html',
  styleUrls: ['./add-sales-admin.component.scss']
})
export class AddSalesAdminComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddSalesAdminComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService) { }
  userNames = [{ label: "Ajay", value: "ajay" }, { label: "Michael John", value: "michael" }, { label: "Jisha", value: "jisha" }, { label: "Sushmi", value: "sushmi" }]

  salesLeadForm = this.fb.group({
    salesLeadName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    shortCode: ['', [Validators.required]],
    loginUserName: ['', [Validators.required]]
  })

  save(){

  }
}
