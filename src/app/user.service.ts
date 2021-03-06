import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private usersUrl: string;

    constructor(private http: HttpClient) {
      this.usersUrl = 'https://core-backend-v1.herokuapp.com/users';
      //this.usersUrl = 'http://localhost:8080/users';
    }

    public findAll(): Observable<User[]> {
      return this.http.get<User[]>(this.usersUrl);
    }

    public findByEmail(email: String): Observable<User> {
      return this.http.get<User>(this.usersUrl+'/'+email);
    }

    public save(user: User) {
      return this.http.post<User>(this.usersUrl, user);
    }

    public delete(user: User) {
      return this.http.delete(this.usersUrl+'/'+user.id).subscribe(() => console.log("yes!"));
    }

}





