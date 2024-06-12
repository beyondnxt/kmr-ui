import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialService {
  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;
  createRawMaterialType(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/rawMaterialType', payload);
  }
  updateRawMaterialType(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/rawMaterialType/${id}`, payload);
  }
  deleteRawMaterialType(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/rawMaterialType/${id}`);
  }
  getRawMaterialType(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/rawMaterialType?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
}
