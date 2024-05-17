import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient,public commonService:CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createCustomer(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/customer', payload);
  }

  updateCustomer(payload: any, id:string): Observable<any> {
    return this.http.put(this.baseUrl + `/customer/${id}`, payload);
  }

  deleteCustomer(id:string): Observable<any> {
    return this.http.delete(this.baseUrl + `/customer/${id}`);
  }

  getCustomer(query:any,searchKey:string|any): Observable<any> {
    return this.http.get(this.baseUrl + `/customer?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${searchKey ? searchKey : ''}`);
  }

  getAllMainCustomer(): Observable<any> {
    return this.http.get(this.baseUrl + `/main-customer/all`);
  }

  getAllSalesLead(): Observable<any> {
    return this.http.get(this.baseUrl + `/user/salesLeadName`);
  }

}
