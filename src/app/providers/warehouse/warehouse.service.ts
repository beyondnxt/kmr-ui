import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  constructor(public http: HttpClient, public commonService: CommonService) {}
  baseUrl = environment.KRM_BASE_URL;

  getAllCompanies(): Observable<any> {
    return this.http.get(this.baseUrl + '/company/all');
  }

  insertWareHouseDetails(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/warehouse', payload);
  }

  getWarehouseLists(query: any, searchKey: string | any): Observable<any> {
    return this.http.get(
      this.baseUrl +
        `/warehouse?page=${query?.pageNo || 1}&limit=${
          query?.pageLimit || this.commonService.calculatePaginationVal()
        }${searchKey ? searchKey : ''}`
    );
  }

  deleteWarehouse(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + `/warehouse/${id}`);
  }

  updateWareHouseDetails(id: number, payload: any): Observable<any> {
    return this.http.put(this.baseUrl + `/warehouse/${id}`, payload);
  }
}
