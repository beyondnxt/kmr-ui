import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;

  createItem(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/item', payload);
  }

  updateItem(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/item/${id}`, payload);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/item/${id}`);
  }

  getItem(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/item?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
  
}
