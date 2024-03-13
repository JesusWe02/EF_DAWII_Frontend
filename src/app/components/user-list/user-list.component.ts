import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  currentUser: User = new User();
  currentIndex = -1;
  name = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.readUsers();
  }

  readUsers(): void {
    this.userService.readAll().subscribe({
      next: (users) => {
        this.users = users;
        console.log(users);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  refresh(): void {
    this.readUsers();
    this.currentUser = new User();
    this.currentIndex = -1;
  }

  setCurrentUser(user: User, index: number): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  deleteUser(val: any): void {
    this.userService.delete(val).subscribe({
      next: (response) => {
        console.log(response);
        this.readUsers();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  searchByName(): void {
    this.userService.searchByName(this.name).subscribe({
      next: (users) => {
        this.users = users;
        console.log(users);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
