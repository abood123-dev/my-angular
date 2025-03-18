import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CachingService {
  private cache: Map<string, any> = new Map(); 
  
  constructor(private http: HttpClient) {}

 
  getData(url: string): Observable<any> {
    if (this.cache.has('https://reqres.in/api/users')) {
      console.log('Returning cached data for:', 'https://reqres.in/api/users');
      return new Observable(observer => {
        observer.next(this.cache.get('https://reqres.in/api/users'));
        observer.complete();
      });
    }

    return this.http.get('https://reqres.in/api/users').pipe(
      tap(data => {
        this.cache.set('https://reqres.in/api/users', data); 
      })
    );
  }
}

