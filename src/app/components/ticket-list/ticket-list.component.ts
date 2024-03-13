import { Ticket } from 'src/app/model/ticket';
import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];
  currentTicket: Ticket = new Ticket();
  currentIndex = -1;
  title = '';

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.readTickets();
  }

  readTickets(): void {
    this.ticketService.readAll().subscribe({
      next: (tickets) => {
        this.tickets = tickets;
        console.log(tickets);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  refresh(): void {
    this.readTickets();
    this.currentTicket = new Ticket();
    this.currentIndex = -1;
  }

  setCurrentTicket(ticket: Ticket, index: number): void {
    this.currentTicket = ticket;
    this.currentIndex = index;
  }

  deleteTicket(val: any): void {
    this.ticketService.delete(val).subscribe({
      next: (response) => {
        console.log(response);
        this.readTickets();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  searchByTitle(): void {
    this.ticketService.searchByTitle(this.title).subscribe({
      next: (tickets) => {
        const searchedTickets = tickets;
        this.tickets = searchedTickets;
        console.log(tickets);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
