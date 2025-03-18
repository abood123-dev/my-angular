import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private api = 'https://reqres.in/api/users';
  constructor(private http:HttpClient ) { }
  getUserbyid(id: number): Observable<any> {
    return this.http.get<any>(this.api).pipe(
      map(response => {
        console.log('API Response:', response)
        const user = Array.isArray(response.data) ? response.data.find((user:any) => user.id === id) : null;
        if (user) {
          console.log('User found:', user);
        } else {
          console.log('User not found');
        }
        
        return user; 
      })
    );
  }
}
