import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RopeSpecificationService {
  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createRopeSpecification(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/ropeSpecification', payload);
  }
  updateRopeSpecification(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/ropeSpecification/${id}`, payload);
  }
  deleteRopeSpecification(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/ropeSpecification/${id}`);
  }
  getRopeSpecification(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/ropeSpecification?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
  getAllColor(): Observable<any> {
    return this.http.get(this.baseUrl + `/color/all`);
  }
  getAllRopeGrade(): Observable<any> {
    return this.http.get(this.baseUrl + `/ropeGrade/all`);
  }
  getAllExtruder(): Observable<any> {
    return this.http.get(this.baseUrl + `/extruder/all`);
  }
}
