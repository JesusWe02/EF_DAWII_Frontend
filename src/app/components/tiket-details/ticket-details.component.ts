import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { Kind } from 'src/app/model/kind';
import { User } from 'src/app/model/user';
import { Project } from 'src/app/model/project';
import { Category } from 'src/app/model/category';
import { Priority } from 'src/app/model/priority';
import { Status } from 'src/app/model/status';
import { KindService } from 'src/app/services/kind.service';
import { UserService } from 'src/app/services/user.service';
import { ProjectService } from 'src/app/services/project.service';
import { CategoryService } from 'src/app/services/category.service';
import { PriorityService } from 'src/app/services/priority.service';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css'],
})
export class TicketDetailsComponent implements OnInit {
  currenticket: Ticket = new Ticket();

  message = '';
  kinds: Kind[] = [];
  users: User[] = [];
  projects: Project[] = [];
  categories: Category[] = [];
  priorities: Priority[] = [];
  status: Status[] = [];

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router,
    private kindService: KindService,
    private userService: UserService,
    private projectService: ProjectService,
    private categoryService: CategoryService,
    private priorityService: PriorityService,
    private statusService: StatusService
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getTicket(this.route.snapshot.paramMap.get('id'));
    this.loadKinds();
    this.loadUsers();
    this.loadProjects();
    this.loadCategories();
    this.loadPriorities();
    this.loadStatus();
  }

  getTicket(id: any): void {
    this.ticketService.read(id).subscribe({
      next: (ticket) => {
        this.currenticket = ticket;
        console.log(ticket);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  updateTicket(): void {
    if (this.currenticket.ticketId) {
      const updatedTicket = this.prepareTicketForUpdate(this.currenticket);

      this.ticketService
        .update(this.currenticket.ticketId, updatedTicket)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.message = '¡El ticket se actualizó correctamente!';
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }

  deleteTicket(): void {
    this.ticketService.delete(this.currenticket.ticketId!).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/ticket']);
      },
      error: (error) => {
        console.log(error);
      },
    });
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

  private prepareTicketForUpdate(ticket: Ticket): any {
    const updatedTicket = { ...ticket };

    updatedTicket.kind = { kindId: ticket.kind?.kindId };
    updatedTicket.user = { userId: ticket.user?.userId };
    updatedTicket.project = { projectId: ticket.project?.projectId };
    updatedTicket.category = { categoryId: ticket.category?.categoryId };
    updatedTicket.priority = { priorityId: ticket.priority?.priorityId };
    updatedTicket.status = { statusId: ticket.status?.statusId };

    return updatedTicket;
  }
}
