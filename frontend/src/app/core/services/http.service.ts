import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Urls } from '../urls/urls.const';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public getWeather(id: number): Observable<any> {
    const url = Urls.getCurrentWeather(id);
    return this.http.get(url);
  }

  public testNest(): Observable<any> {
    const url = 'http://localhost:4200/backend/login';
    return this.http.get(url);
  }

  public login(data): Observable<any> {
    const url = 'http://localhost:4200/backend/login';
    return this.http.post(url, data);
  }
}
