import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from 'src/app/providers/common/common.service';
import { RopeMachineService } from 'src/app/providers/rope-machine/rope-machine.service';

@Component({
  selector: 'app-add-rope-machine',
  templateUrl: './add-rope-machine.component.html',
  styleUrls: ['./add-rope-machine.component.scss']
})
export class AddRopeMachineComponent {
  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<AddRopeMachineComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any, public commonService: CommonService, private ropeMachineService : RopeMachineService) { }
  ropeMachineForm = this.fb.group({
    location: ['',[Validators.required]],
    machineName: ['',[Validators.required]],  
    shortCode:['',[Validators.required]], 
    maximumCoolingHead: ['',[Validators.required]],
    spindlePerStand: ['',[Validators.required]],
    noOfStrand: ['',[Validators.required]],
    itemCode: ['',[Validators.required]],
    hoursProduction: ['',[Validators.required]],
    runningProduction: ['',[Validators.required]],

  })
  apiLoader = false;
  ngOnInit() {
    this.patchRopeMachine();
    this.commonService.getAllLocation();
    
  }
  save(isEdit: boolean) {
    this.ropeMachineForm.markAllAsTouched();
    if (this.ropeMachineForm.invalid) {
      this.commonService.notification('Failed', 'Please fill all required fields', 'fail')
      return;
    } else if (isEdit) {
      this.updateRopeMachine(this.ropeMachineForm.getRawValue(), this.dialogData?.id)
    } else {
      this.createRopeMachine(this.ropeMachineForm.getRawValue());
    }
  }

  patchRopeMachine() {
    if (this.dialogData) {
      this.ropeMachineForm.patchValue(this.dialogData);
    }
  }

  createRopeMachine(payload: any) {
    this.apiLoader = true;
    this.ropeMachineService.createRopeMachine(payload).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Rope Machine created successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }

  updateRopeMachine(payload: any, id: string) {
    this.apiLoader = true;
    this.ropeMachineService.updateRopeMachine(payload, id).subscribe({
      next: (res) => {
        this.apiLoader = false;
        this.commonService.notification('Success', 'Rope Machine updated successfully', 'success')
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.apiLoader = false;
        this.commonService.notification('Failed', 'Failed to update, please try again', 'fail')
      },
    })
  }
}

