import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockWorkerService {

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.http.get("/players");
  }
}
