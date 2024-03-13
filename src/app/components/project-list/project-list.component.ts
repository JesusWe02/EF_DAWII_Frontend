import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.readProjects();
  }

  readProjects(): void {
    this.projectService.readAll().subscribe({
      next: (projects) => {
        this.projects = projects;
        console.log(projects);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
