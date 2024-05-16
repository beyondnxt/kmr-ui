import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

 
  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createSupplier(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/supplier', payload);
  }

  updateSupplier(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/supplier/${id}`, payload);
  }

  deleteSupplier(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/supplier/${id}`);
  }

  getSupplier(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/supplier?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }

}
