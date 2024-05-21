import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeKgLengthService } from 'src/app/providers/rope-kg-length/rope-kg-length.service';

@Component({
  selector: 'app-add-rope-kg-length',
  templateUrl: './add-rope-kg-length.component.html',
  styleUrls: ['./add-rope-kg-length.component.scss']
})
export class AddRopeKgLengthComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddRopeKgLengthComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any,  private commonService: CommonService, private ropeKgLengthService: RopeKgLengthService ) { }
  ropekgLengthForm = this.fb.group({
    code: ['', [Validators.required]],
    meterKg: ['', [Validators.required]],
  })
  apiLoader = false;
  ngOnInit() {
    this.patchMainCustomer();
  }

  save(isEdit: boolean) {
    this.ropekgLengthForm.markAllAsTouched();
    if (this.ropekgLengthForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateMainCustomer(this.ropekgLengthForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createMainCustomer(this.ropekgLengthForm.getRawValue());
    }
  }

  patchMainCustomer() {
    if (this.dialogData) {
      this.ropekgLengthForm.patchValue(this.dialogData);
    }
  }

  createMainCustomer(payload: any) {
    this.apiLoader = true;
    this.ropeKgLengthService.createRopeKgLength(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Rope kg length created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateMainCustomer(payload: any, id: string) {
    this.apiLoader = true;
    this.ropeKgLengthService.updateRopeKgLength(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Rope kg length updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
}
