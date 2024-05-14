import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-rope-specification',
  templateUrl: './add-rope-specification.component.html',
  styleUrls: ['./add-rope-specification.component.scss']
})
export class AddRopeSpecificationComponent {
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddRopeSpecificationComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any) { }
  ropeSpecificationForm = this.fb.group({
    sampleNo:['',[Validators.required]],
    date:['',[Validators.required]],
    ropeSize:['',[Validators.required]],
    color:['',[Validators.required]],
    type:['',[Validators.required]],
    twist:['',[Validators.required]],
    grade:['',[Validators.required]],
    customer:['',[Validators.required]],
    exNo:['',[Validators.required]],
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
    gpd1:['',[Validators.required]],
    rackNo:['',[Validators.required]],
    additives:['',[Validators.required]]
  })

  save() {
    this.ropeSpecificationForm.markAllAsTouched();
  }
}
