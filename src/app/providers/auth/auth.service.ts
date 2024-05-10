import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  userLogIn(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/auth/signin', payload);
  }
  createUser(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/auth/signup', payload);
  }

  updateUser(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/user/${id}`, payload);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/user/${id}`);
  }

  getUser(query: any, searchKey: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/user?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${searchKey ? searchKey : ''}`);
  }
  
  getDepartment(): Observable<any> {
    return this.http.get(this.baseUrl + '/department/all');
  }

}
