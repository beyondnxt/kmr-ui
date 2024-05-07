import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { DepartmentService } from 'src/app/providers/department/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddDepartmentComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private departmentService: DepartmentService, private commonService: CommonService) { }
  types = [{ name: 'Mono Filament', checked: true }, { name: 'Multi Filament', checked: false }, { name: 'Knitting', checked: false }, { name: 'Processing', checked: false }];
  locations = [{ name: 'Test', value: 'Test' }];
  selectedTypes: any = []
  departMentForm = this.fb.group({
    departmentName: ['', [Validators.required]],
    location: ['', [Validators.required]],
    type: ['', [Validators.required]],
  })

  ngOnInit() {
    this.patchDepartment();
  }

  patchDepartment() {
    if (this.dialogData) {
      this.departMentForm.patchValue(this.dialogData);
      for (let data of this.dialogData?.type) {
        const findType = this.types.find((x: any) => x.name === data);
        if (findType) {
          findType.checked = true; 
        }
      }
    }
  }
  
  save(isEdit: boolean) {
    const payload = {
      departmentName: this.departMentForm.value.departmentName,
      location: this.departMentForm.value.location,
      type: this.selectedTypes
    }
    if (this.departMentForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateMainCustomer(payload, this.dialogData?.id)
    } else {
      this.createMainCustomer(payload);
    }
  }

  selectedType(type: string) {
    this.selectedTypes.push(type);
  }

  createMainCustomer(payload: any) {
    this.departmentService.createDepartment(payload).subscribe({
      next: (res) => {
        this.commonService.notification('Success', 'Department created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Department created successfully', 'fail')
      },
    })
  }

  updateMainCustomer(payload: any, id: string) {
    this.departmentService.updateDepartment(payload, id).subscribe({
      next: (res) => {
        this.commonService.notification('Success', 'Department updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
}
