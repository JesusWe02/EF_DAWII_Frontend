import { StatusService } from './../../services/status.service';
import { Status } from './../../model/status';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css'],
})
export class StatusListComponent implements OnInit {
  status: Status[] = [];
  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.readStatus();
  }

  readStatus(): void {
    this.statusService.readAll().subscribe({
      next: (status) => {
        this.status = status;
        console.log(status);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
