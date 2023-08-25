import {Component} from '@angular/core';
import {MockWorkerService} from "./mock-worker.service";
import {worker} from "../mocks/browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'height', 'weight'];
  dataSource: any[] = [];

  constructor(private mockWorkerService: MockWorkerService) {

    worker.start().then(() => console.log("worker started!"));

    this.mockWorkerService.getAllPlayers()
      .subscribe(players => {
        this.dataSource = players;
      });

  }

}
