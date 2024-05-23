import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RopeGradeService {

  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createRopeGrade(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/ropeGrade', payload);
  }

  updateRopeGrade(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/ropeGrade/${id}`, payload);
  }

  deleteRopeGrade(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/ropeGrade/${id}`);
  }

  getRopeGrade(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/ropeGrade?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }

  getRopeType(): Observable<any> {
    return this.http.get(this.baseUrl + `/ropeType/all`);
  }

}
