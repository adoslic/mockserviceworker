import {Component} from '@angular/core';
import {MockWorkerService} from "./mock-worker.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mockserviceworker';
  displayedColumns: string[] = ['id', 'name', 'height', 'weight'];
  dataSource: any[] = [];


  constructor(private mockWorkerService: MockWorkerService) {
    this.dataSource = this.mockWorkerService.getAllPlayers();
  }

}
