import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RopeKgLengthService {

  
  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createRopeKgLength(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/ropeKgLength', payload);
  }

  updateRopeKgLength(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/ropeKgLength/${id}`, payload);
  }

  deleteRopeKgLength(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/ropeKgLength/${id}`);
  }

  getRopeKgLength(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/ropeKgLength?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
}
