import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(public http: HttpClient,public commonService:CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createCompany(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/company', payload);
  }

  updateCompany(payload: any, id:string): Observable<any> {
    return this.http.put(this.baseUrl + `/company/${id}`, payload);
  }

  deleteCompany(id:string): Observable<any> {
    return this.http.delete(this.baseUrl + `/company/${id}`);
  }

  getCompany(query:any): Observable<any> {
    return this.http.get(this.baseUrl + `/company?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}`);
  }

}
