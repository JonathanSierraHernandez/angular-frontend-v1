import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inout } from './inout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InoutService {

    private inOutUrl: string;

    constructor(private http: HttpClient) {
      //this.inOutUrl = 'http://localhost:8080/inout';
      this.inOutUrl = 'https://core-backend-v1.herokuapp.com/inout';
    }

    public findAll(): Observable<Inout[]> {
      return this.http.get<Inout[]>(this.inOutUrl);
    }

    public save(inout: Inout) {
      return this.http.post<Inout>(this.inOutUrl, inout);
    }

    public delete(inout: Inout) {
      return this.http.delete(this.inOutUrl+'/'+inout.id).subscribe(() => console.log("yes!"));
    }
}
