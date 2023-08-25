import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockWorkerService {

  constructor() { }

  getAllPlayers(): any[] {
    const player1 = {
      id: 1,
      name: 'Cristiano Ronaldo',
      height: 190,
      weight: 85
    }
    const player2 = {
      id: 2,
      name: 'Lionel Messi',
      height: 165,
      weight: 65
    }
    return [player1, player2];
  }
}
