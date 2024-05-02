import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private loggedInData = new BehaviorSubject<any>(undefined);
  logged_in_data = this.loggedInData.asObservable();

  sendLoggedInData(data: any) {
    this.loggedInData.next(data);
  }
}
