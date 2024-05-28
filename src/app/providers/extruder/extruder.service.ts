import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtruderService {

  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createExtruder(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/extruder', payload);
  }

  updateExtruder(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/extruder/${id}`, payload);
  }

  deleteExtruder(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/extruder/${id}`);
  }

  getExtruder(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/extruder?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
}
