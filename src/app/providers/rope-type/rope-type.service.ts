import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RopeTypeService {

  
  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createRopeType(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/ropeType', payload);
  }

  updateRopeType(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/ropeType/${id}`, payload);
  }

  deleteRopeType(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/ropeType/${id}`);
  }

  getRopeType(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/ropeType?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }

}
