import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  
  constructor(public http: HttpClient,public commonService:CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createDepartment(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/department', payload);
  }

  updateDepartment(payload: any, id:string): Observable<any> {
    return this.http.put(this.baseUrl + `/department/${id}`, payload);
  }

  deleteDepartment(id:string): Observable<any> {
    return this.http.delete(this.baseUrl + `/department/${id}`);
  }

  getDepartment(query:any,searchKey:string|any): Observable<any> {
    return this.http.get(this.baseUrl + `/department?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${searchKey ? searchKey : ''}`);
  }
}
