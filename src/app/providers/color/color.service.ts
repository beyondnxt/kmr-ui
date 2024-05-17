import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createColor(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/color', payload);
  }

  updateColor(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/color/${id}`, payload);
  }

  deleteColor(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/color/${id}`);
  }

  getColor(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/color?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
  
}
