import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RopeMachineService {

  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createRopeMachine(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/ropeMachine', payload);
  }

  updateRopeMachine(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/ropeMachine/${id}`, payload);
  }

  deleteRopeMachine(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/ropeMachine/${id}`);
  }

  getRopeMachine(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/ropeMachine?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
  
}
