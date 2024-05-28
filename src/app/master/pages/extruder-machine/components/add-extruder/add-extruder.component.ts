import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { ExtruderService } from 'src/app/providers/extruder/extruder.service';

@Component({
  selector: 'app-add-extruder',
  templateUrl: './add-extruder.component.html',
  styleUrls: ['./add-extruder.component.scss']
})
export class AddExtruderComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddExtruderComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any, public commonService: CommonService, private extruderService : ExtruderService,) { }
  extruderForm = this.fb.group({
    machineName: ['',[Validators.required]],
    shortCode: ['',[Validators.required]],
    location: ['',[Validators.required]],
    code: ['',[Validators.required]],
    rpm: ['',[Validators.required]],
    target: ['',[Validators.required]],
    runningTime: ['',[Validators.required]],
    spindle: ['',[Validators.required]],
  })
  apiLoader = false;
  ngOnInit() {
    this.patchExtruder();
    this.commonService.getAllLocation();
  }

  save(isEdit: boolean) {
    this.extruderForm.markAllAsTouched();
    if (this.extruderForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateExtruder(this.extruderForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createExtruder(this.extruderForm.getRawValue());
    }
  }

  patchExtruder() {
    if (this.dialogData) {
      this.extruderForm.patchValue(this.dialogData);
    }
  }

  createExtruder(payload: any) {
    this.apiLoader = true;
    this.extruderService.createExtruder(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Extruder created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateExtruder(payload: any, id: string) {
    this.apiLoader = true;
    this.extruderService.updateExtruder(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Extruder updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
}
