import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createRole(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/role', payload);
  }

  updateRole(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/role/${id}`, payload);
  }

  deleteRole(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/role/${id}`);
  }

  getRole(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/role?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }

  getModule(): Observable<any>{
    return this.http.get(this.baseUrl + '/role/module')
  }
  
}
