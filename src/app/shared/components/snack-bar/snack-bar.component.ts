import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {
  constructor(public router: Router,@Inject(MAT_SNACK_BAR_DATA) public data:any,public snackBarRef:MatSnackBarRef<SnackBarComponent>) { }
  dismiss(){
    this.snackBarRef.dismiss();
  }
}
