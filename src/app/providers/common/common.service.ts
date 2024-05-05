import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar: MatSnackBar) { }
  
  calculatePaginationVal(): any {
    const height = (window.innerHeight - 290);
    if (window.innerHeight <= 500) {
      return 4;
    }
    if (window.innerHeight <= 600) {
      return 4;
    }
    if (window.innerHeight <= 609) {
      return 9;
    }
    if (window.innerHeight <= 657) {
      return 10;
    }
    /* 80% */
    if (window.innerHeight <= 730) {
      return 10;
    }
    /* 80% */
    if (window.innerHeight <= 821) {
      return 11;
    }
    /* 75% */
    if (window.innerHeight <= 900) {
      return 11;
    }
    /* 67% */
    if (window.innerHeight <= 970) {
      return 11;
    }
    /* 67% */
    if (window.innerHeight <= 1020) {
      return 11;
    }
    /* 67% */
    if (window.innerHeight <= 1100) {
      return 11;
    }
    /* 67% */
    if (window.innerHeight <= 1170) {
      return 11;
    }
    /* 67% */
    if (window.innerHeight <= 1210) {
      return 14;
    }
    /* 67% */
    if (window.innerHeight <= 1250) {
      return 14;
    }
    /* 67% */
    if (window.innerHeight <= 1350) {
      return 14;
    }
    /* 50% */
    if (window.innerHeight <= 1400) {
      return 14;
    }
    /* 50% */
    if (window.innerHeight <= 1450) {
      return 15;
    }
    if (window.innerHeight <= 1550) {
      return 15;
    }
    /* 50% */
    if (window.innerHeight <= 1600) {
      return 15;
    }
    /* 50% */
    if (window.innerHeight <= 1700) {
      return 16;
    }
    /* 50% */
    if (window.innerHeight <= 1750) {
      return 16;
    }
    /* 33.3% */
    if (window.innerHeight <= 1800) {
      return 17;
    }
    /* 25% */
    if (window.innerHeight <= 2628) {
      return 17;
    }
  }

  showSnackbar(content: string) {
    this.snackBar.open(content, 'Close', {
      duration: 2000,
    });
  }
}
