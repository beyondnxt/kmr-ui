import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeTypeService } from 'src/app/providers/rope-type/rope-type.service';

@Component({
  selector: 'app-add-rope-type',
  templateUrl: './add-rope-type.component.html',
  styleUrls: ['./add-rope-type.component.scss']
})
export class AddRopeTypeComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddRopeTypeComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any, private commonService: CommonService, private ropeTypeService: RopeTypeService) { }
  apiLoader = false;
  ropeTypeForm = this.fb.group({
    shortCode: ['', [Validators.required]],
    ropeType: ['', [Validators.required]],
    pieceNoShortCode: ['', [Validators.required]],
  })

  ngOnInit() {
    this.patchRopeType();
  }

  save(isEdit: boolean) {
    this.ropeTypeForm.markAllAsTouched();
    if (this.ropeTypeForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateRopeType(this.ropeTypeForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createRopeType(this.ropeTypeForm.getRawValue());
    }
  }

  patchRopeType() {
    if (this.dialogData) {
      this.ropeTypeForm.patchValue(this.dialogData);
    }
  }

  createRopeType(payload: any) {
    this.apiLoader = true;
    this.ropeTypeService.createRopeType(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Rope Type created successfully', 'success')
        this.dialogRef.close(true);
        this.apiLoader = false;
      },
      error: (err) => {
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateRopeType(payload: any, id: string) {
    this.apiLoader = true;
    this.ropeTypeService.updateRopeType(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Rope Type updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
}
