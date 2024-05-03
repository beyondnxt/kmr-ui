import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService implements StorageInterface {
  clear(): void {
    sessionStorage.clear();
  }
  getItem(key: string): any {
    return sessionStorage.getItem(key);
  }
  key(index: number): any {
    return sessionStorage.key(index);
  }
  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }
}

interface StorageInterface {
  clear(): void;

  getItem(key: any): string | null;

  key(index: number): string | null;

  removeItem(key: string): void;

  setItem(key: string, value: string): void;
}
