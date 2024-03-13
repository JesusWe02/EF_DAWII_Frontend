import { PriorityService } from './../../services/priority.service';
import { Priority } from './../../model/priority';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priority-list',
  templateUrl: './priority-list.component.html',
  styleUrls: ['./priority-list.component.css'],
})
export class PriorityListComponent implements OnInit {
  prioritys: Priority[] = [];

  constructor(private priorityService: PriorityService) {}

  ngOnInit(): void {
    this.readPrioritys();
  }

  readPrioritys(): void {
    this.priorityService.readAll().subscribe({
      next: (prioritys) => {
        this.prioritys = prioritys;
        console.log(prioritys);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
