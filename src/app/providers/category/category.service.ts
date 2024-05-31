import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http: HttpClient, public commonService: CommonService) { }
  baseUrl = environment.KRM_BASE_URL;
  createCategory(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/category', payload);
  }
  updateCategory(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/category/${id}`, payload);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/category/${id}`);
  }

  getCategory(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/category?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
  createParentCategory(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/parentCategory', payload);
  }

  updateParentCategory(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/parentCategory/${id}`, payload);
  }

  deleteParentCategory(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/parentCategory/${id}`);
  }

  getParentCategory(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/parentCategory?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
  createChildCategory(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/childCategory', payload);
  }

  updateChildCategory(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/childCategory/${id}`, payload);
  }
  deleteChildCategory(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/childCategory/${id}`);
  }
  getChildCategory(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/childCategory?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
  createSubCategory(payload: any): Observable<any> {
    return this.http.post(this.baseUrl + '/subCategory', payload);
  }
  updateSubCategory(payload: any, id: string): Observable<any> {
    return this.http.put(this.baseUrl + `/subCategory/${id}`, payload);
  }
  deleteSubCategory(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + `/subCategory/${id}`);
  }
  getSubCategory(query: any, key: string | any): Observable<any> {
    return this.http.get(this.baseUrl + `/subCategory?page=${query?.pageNo || 1}&limit=${query?.pageLimit || this.commonService.calculatePaginationVal()}${key ? key : ''}`);
  }
  getAllParentCategory(): Observable<any> {
    return this.http.get(this.baseUrl + `/parentCategory/all`);
  }
  getAllChildCategory(): Observable<any> {
    return this.http.get(this.baseUrl + `/childCategory/all`);
  }
  getAllSubCategory(): Observable<any> {
    return this.http.get(this.baseUrl + `/subcategory/all`);
  }
}
