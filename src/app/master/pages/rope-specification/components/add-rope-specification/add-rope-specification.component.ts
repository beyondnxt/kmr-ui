import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeSpecificationService } from 'src/app/providers/rope-specification/rope-specification.service';

@Component({
  selector: 'app-add-rope-specification',
  templateUrl: './add-rope-specification.component.html',
  styleUrls: ['./add-rope-specification.component.scss']
})
export class AddRopeSpecificationComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddRopeSpecificationComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any,public commonService: CommonService, private ropeSpecificationService: RopeSpecificationService) { }
  apiLoader = false;
  allColor:any = [];
  allExtruder:any = [];
  allRopeGrade:any = [];
  ropeSpecificationForm = this.fb.group({
    sampleNo:['',[Validators.required]],
    date:['',[Validators.required]],
    ropeSize:['',[Validators.required]],
    colorId:['',[Validators.required]],
    type:['',[Validators.required]],
    twist:['',[Validators.required]],
    ropeGradeId:['',[Validators.required]],
    customer:['',[Validators.required]],
    extruderId:['',[Validators.required]],
    die:['',[Validators.required]],
    stretchRatio:['',[Validators.required]],
    elongation:['',[Validators.required]],
    gpd:['',[Validators.required]],
    denier:['',[Validators.required]],
    noOfTape:['',[Validators.required]],
    strandDenier:['',[Validators.required]],
    onlineTpm:['',[Validators.required]],
    noOfStrand:['',[Validators.required]],
    ropeMcNo:['',[Validators.required]],
    gear:['',[Validators.required]],
    twistFactor:['',[Validators.required]],
    layLength:['',[Validators.required]],
    wMtr:['',[Validators.required]],
    actualDia:['',[Validators.required]],
    strength:['',[Validators.required]],
    elongation1:['',[Validators.required]],
    gpd1:[''],
    rackNo:['',[Validators.required]],
    additives:['',[Validators.required]]
  })

  ngOnInit() {
    this.patchRopeSpecification();
    this.getAllColor();
    this.getAllRopeGrade();
    this.getAllExtruder();
  }

  save(isEdit: boolean) {
    this.ropeSpecificationForm.markAllAsTouched();
    const payload:any = this.ropeSpecificationForm.getRawValue();
    payload.date = new Date(Date.parse(payload.date)).toISOString().split('T')[0];
    console.log('payload=>', payload)
    if (this.ropeSpecificationForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateRopeSpecification(payload, this.dialogData?.id)
    } else {
      this.createRopeSpecification(payload);
    }
  }

  patchRopeSpecification() {
    if (this.dialogData) {
      this.ropeSpecificationForm.patchValue(this.dialogData);
    }
  }

  createRopeSpecification(payload: any) {
    this.apiLoader = true;
    this.ropeSpecificationService.createRopeSpecification(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Rope specification created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
  updateRopeSpecification(payload: any, id: string) {
    this.apiLoader = true;
    this.ropeSpecificationService.updateRopeSpecification(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Rope specification updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
  fetchDropDownData(serviceMethod: any, successCallback: any, errorMessage: any) {
    serviceMethod().subscribe({
      next: (res: any) => {
        successCallback(res.data);
      },
      error: (err: any) => {
        this.commonService.notification('Failed', errorMessage, 'fail');
      },
    });
  }
  getAllColor() {
    this.fetchDropDownData(
      () => this.ropeSpecificationService.getAllColor(),
      (data: any) => { this.allColor = data; },
      'Failed to get color'
    );
  }
  getAllExtruder() {
    this.fetchDropDownData(
      () => this.ropeSpecificationService.getAllExtruder(),
      (data: any) => { this.allExtruder = data; },
      'Failed to get extruder'
    );
  }
  getAllRopeGrade() {
    this.fetchDropDownData(
      () => this.ropeSpecificationService.getAllRopeGrade(),
      (data: any) => { this.allRopeGrade = data; },
      'Failed to get rope grade'
    );
  }

}
