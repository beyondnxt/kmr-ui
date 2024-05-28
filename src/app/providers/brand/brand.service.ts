import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createBrand(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/brand', payload);
  }

  updateBrand(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/brand/${id}`, payload);
  }

  deleteBrand(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/brand/${id}`);
  }

  getBrand(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/brand?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
  getrawMaterialType(): Observable<any> {
    return this.http.get(this.baseUrl + `/rawMaterialType/all`);
  }
}
