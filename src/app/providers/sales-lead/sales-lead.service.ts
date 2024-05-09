import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesLeadService {

  constructor(public http: HttpClient,public commonService:CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createSalesLead(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/saleslead', payload);
  }

  updateSalesLead(payload: any, id:string): Observable<any> {
    return this.http.put(this.baseUrl + `/saleslead/${id}`, payload);
  }

  deleteSalesLead(id:string): Observable<any> {
    return this.http.delete(this.baseUrl + `/saleslead/${id}`);
  }

  getSalesLead(query:any,searchKey:string|any): Observable<any> {
    return this.http.get(this.baseUrl + `/saleslead?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${searchKey ? searchKey : ''}`);
  }

  userList(): Observable<any> {
    return this.http.get(this.baseUrl + `/user/all`);
    
  }
}
