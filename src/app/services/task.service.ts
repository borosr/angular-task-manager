import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private BASE_URL = 'https://api.spacexdata.com/v2';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getRockets(): Observable<{name: string, id: string, rocketid: number}[]> {
    return this.httpClient.get<{name: string, id: string, rocketid: number}[]>(this.BASE_URL + '/rockets');
  }
}
