import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeGradeService } from 'src/app/providers/rope-grade/rope-grade.service';

@Component({
  selector: 'app-add-rope-grade',
  templateUrl: './add-rope-grade.component.html',
  styleUrls: ['./add-rope-grade.component.scss']
})
export class AddRopeGradeComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddRopeGradeComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any,  private commonService: CommonService, private ropeGradeService: RopeGradeService) { }
  ropeGradeForm = this.fb.group({
    ropeTypeId: ['',[Validators.required]],
    categoryGrade: ['',[Validators.required]],
    grade: ['',[Validators.required]],
    rmComb: ['',[Validators.required]],
  })

  apiLoader = false;
  ropeTypes :any;
  ngOnInit() {
    this.patchRopeGrade();
    this.getRopeType();
  }

  save(isEdit: boolean) {
    this.ropeGradeForm.markAllAsTouched();
    if (this.ropeGradeForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateRopeGrade(this.ropeGradeForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createRopeGrade(this.ropeGradeForm.getRawValue());
    }
  }

  patchRopeGrade() {
    if (this.dialogData) {
      this.ropeGradeForm.patchValue(this.dialogData);
    }
  }

  createRopeGrade(payload: any) {
    this.apiLoader = true;
    this.ropeGradeService.createRopeGrade(payload).subscribe({
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

  updateRopeGrade(payload: any, id: string) {
    this.apiLoader = true;
    this.ropeGradeService.updateRopeGrade(payload, id).subscribe({
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

  getRopeType() {
    this.ropeGradeService.getRopeType().subscribe({
      next: (res) => {
        this.ropeTypes = res.data;
      },
      error: (err) => {
        this.commonService.notification(
          'Failed',
          'Failed to get rope grade',
          'fail'
        );
      },
    });
  }
}
