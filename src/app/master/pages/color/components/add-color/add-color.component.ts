import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as data from './../../color-data'
import { CommonService } from 'src/app/providers/common/common.service';
import { RoleService } from 'src/app/providers/role/role.service';
import { ColorService } from 'src/app/providers/color/color.service';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.scss']
})

export class AddColorComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddColorComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private colorService: ColorService) { }
  applicableFor = data.applicableFor;
  selectedApplicableFor: any = [];
  apiLoader = false
  colorForm = this.fb.group({
    colorName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    shortCode: ['', [Validators.required]],
    matchingColor: ['', [Validators.required]],
    applicableFor: this.buildCheckboxes(),
  })

  ngOnInit() {
    this.patchColor();
  }

  save(isEdit: boolean) {
    this.colorForm.markAllAsTouched();
    const payload = {
      colorName: this.colorForm.value?.colorName,
      shortCode: this.colorForm.value?.shortCode,
      matchingColor: this.colorForm.value?.matchingColor,
      applicableFor: this.selectedApplicableFor
    }
    if (this.colorForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateColor(payload, this.dialogData?.id)
    } else {
      this.createColor(payload);
    }
  }

  get checkboxesArray() {
    return this.colorForm.get('applicableFor') as FormArray;
  }

  buildCheckboxes() {
    const checkboxes = this.applicableFor.map(type => {
      return this.fb.control(type.checked);
    });
    return this.fb.array(checkboxes);
  }

  onCheckboxChange(index: number, event: any) {
    this.checkboxesArray.at(index).setValue(event.target.checked);
  }

  patchColor() {
    if (this.dialogData) {
      this.colorForm.patchValue({ colorName: this.dialogData.colorName, shortCode: this.dialogData.shortCode, matchingColor: this.dialogData.matchingColor });
      for (let data of this.dialogData.applicableFor) {
        this.selectedApplicable(data, 'patch');
        const index = this.applicableFor.findIndex(x => x.name === data);
        if (index !== -1) {
          this.checkboxesArray.at(index).patchValue(true);
          this.applicableFor[index].checked = true;
        }
      }
    }
  }

  selectedApplicable(type: string, event: any) {
    if (event?.checked || event === 'patch') {
      this.selectedApplicableFor.push(type);
    } else {
      const index = this.selectedApplicableFor.indexOf(type);
      if (index !== -1) {
        this.selectedApplicableFor.splice(index, 1);
      }
    }
  }

  createColor(payload: any) {
    this.apiLoader = true;
    this.colorService.createColor(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Color created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateColor(payload: any, id: string) {
    this.apiLoader = true;
    this.colorService.updateColor(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Color updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

}
