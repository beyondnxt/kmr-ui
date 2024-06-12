import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { DepartmentService } from 'src/app/providers/department/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddDepartmentComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private departmentService: DepartmentService, public commonService: CommonService) { }
  types = [{ name: 'Mono Filament', checked: true }, { name: 'Multi Filament', checked: false }, { name: 'Knitting', checked: false }, { name: 'Processing', checked: false }];
  locations = [{ name: 'Test', value: 'Test' }];
  selectedTypes: any = [];
  apiLoader = false;
  departMentForm = this.fb.group({
    departmentName: ['', [Validators.required]],
    location: ['', [Validators.required]],
    type: this.buildCheckboxes()
  })

  ngOnInit() {
    this.patchDepartment();
    this.commonService.getAllLocation();
  }

  get checkboxesArray() {
    return this.departMentForm.get('type') as FormArray;
  }

  buildCheckboxes() {
    const checkboxes = this.types.map(type => {
      return this.fb.control(type.checked);
    });
    return this.fb.array(checkboxes);
  }

  onCheckboxChange(index: number, event: any) {
    this.checkboxesArray.at(index).setValue(event.target.checked);
  }

  patchDepartment() {
    if (this.dialogData) {
      this.departMentForm.patchValue({ departmentName: this.dialogData.departmentName, location: this.dialogData.location });
      for (let data of this.dialogData.type) {
        this.selectedType(data, 'patch');
        console.log(data)
        const index = this.types.findIndex(x => x.name === data);
        if (index !== -1) {
          this.checkboxesArray.at(index).patchValue(true);
          this.types[index].checked = true;
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

  selectedType(type: string, event: any) {
    if (event?.checked || event === 'patch') {
      this.selectedTypes.push(type);
    } else {
      const index = this.selectedTypes.indexOf(type);
      if (index !== -1) {
        this.selectedTypes.splice(index, 1);
      }
    }
  }

  createMainCustomer(payload: any) {
    this.apiLoader = true;
    this.departmentService.createDepartment(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Department created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to create, please try again', 'fail')
      },
    })
  }

  updateMainCustomer(payload: any, id: string) {
    this.apiLoader = true;
    this.departmentService.updateDepartment(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Department updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
}
