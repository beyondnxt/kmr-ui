import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainCustomerService {

  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createMainCustomer(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/main-customer', payload);
  }

  updateMainCustomer(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/main-customer/${id}`, payload);
  }

  deleteMainCustomer(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/main-customer/${id}`);
  }

  getMainCustomer(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/main-customer?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
}
