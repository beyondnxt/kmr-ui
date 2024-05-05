import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService implements StorageInterface {
  clear(): void {
    localStorage.clear();
  }
  getItem(key: string): any {
    return localStorage.getItem(key);
  }
  key(index: number): any {
    return localStorage.key(index);
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}

interface StorageInterface {
  clear(): void;

  getItem(key: any): string | null;

  key(index: number): string | null;

  removeItem(key: string): void;

  setItem(key: string, value: string): void;
}
