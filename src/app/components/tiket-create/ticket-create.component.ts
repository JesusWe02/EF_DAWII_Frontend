import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Kind } from 'src/app/model/kind';
import { Priority } from 'src/app/model/priority';
import { Project } from 'src/app/model/project';
import { Status } from 'src/app/model/status';
import { User } from 'src/app/model/user';
import { CategoryService } from 'src/app/services/category.service';
import { KindService } from 'src/app/services/kind.service';
import { PriorityService } from 'src/app/services/priority.service';
import { ProjectService } from 'src/app/services/project.service';
import { StatusService } from 'src/app/services/status.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css'],
})
export class TicketCreateComponent implements OnInit {
  ticket: any = {
    title: '',
    description: '',
    updated_at: '',
    created_at: '',
    kind: {
      kindId: '',
    },
    user: {
      userId: '',
    },
    project: {
      projectId: '',
    },
    category: {
      categoryId: '',
    },
    priority: {
      priorityId: '',
    },
    status: {
      statusId: '',
    },
  };
  submitted = false;
  ticketCreated = false;
  kinds: Kind[] = [];
  users: User[] = [];
  projects: Project[] = [];
  categories: Category[] = [];
  priorities: Priority[] = [];
  status: Status[] = [];

  constructor(
    private ticketService: TicketService,
    private kindService: KindService,
    private userService: UserService,
    private projectService: ProjectService,
    private categoryService: CategoryService,
    private priorityService: PriorityService,
    private statusService: StatusService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadKinds();
    this.loadUsers();
    this.loadProjects();
    this.loadCategories();
    this.loadPriorities();
    this.loadStatus();
  }

  createTicket(): void {
    this.ticketService.create(this.ticket).subscribe(
      (response) => {
        console.log('Ticket created successfully:', response);
        this.submitted = true;
        this.ticketCreated = true;
        this.resetForm();
        this.router.navigate(['/ticket']);
      },
      (error) => {
        console.error('Error creating ticket:', error);
      }
    );
  }

  loadKinds(): void {
    this.kindService.readAll().subscribe(
      (kinds) => {
        this.kinds = kinds;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadUsers(): void {
    this.userService.readAll().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadProjects(): void {
    this.projectService.readAll().subscribe(
      (projects) => {
        this.projects = projects;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadCategories(): void {
    this.categoryService.readAll().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error obteniendo categorías:', error);
      }
    );
  }

  loadPriorities(): void {
    this.priorityService.readAll().subscribe(
      (priorities) => {
        this.priorities = priorities;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  loadStatus(): void {
    this.statusService.readAll().subscribe(
      (status) => {
        this.status = status;
      },
      (error) => {
        console.error('Error obteniendo categorías:', error);
      }
    );
  }

  resetForm(): void {
    this.submitted = false;
    this.ticket = {
      title: '',
      description: '',
      updated_at: '',
      created_at: '',
      kind: {
        kindId: '',
      },
      user: {
        userId: '',
      },
      project: {
        projectId: '',
      },
      category: {
        categoryId: '',
      },
      priority: {
        priorityId: '',
      },
      status: {
        statusId: '',
      },
    };
    this.ticketCreated = true;
  }
}
