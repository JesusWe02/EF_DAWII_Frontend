import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  currentuser: User = new User();
  message = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id: any): void {
    this.userService.read(id).subscribe({
      next: (user) => {
        this.currentuser = user;
        console.log(user);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  setAvailableStatus(status: boolean): void {
    this.currentuser.kind = Number(this.currentuser.kind);
    const data: User = {
      username: this.currentuser.username,
      name: this.currentuser.name,
      lastname: this.currentuser.lastname,
      email: this.currentuser.email,
      password: this.currentuser.password,
      is_active: status,
      kind: this.currentuser.kind,
      created_at: this.currentuser.created_at,
    };
    this.userService.update(this.currentuser.userId!, data).subscribe({
      next: (response) => {
        this.currentuser.is_active = response;
        console.log(response);
        this.router.navigate(['/user']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  updateUser(): void {
    this.userService
      .update(this.currentuser.userId!, this.currentuser)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.message = 'The user was updated!';
          this.router.navigate(['/user']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  deleteUser(): void {
    this.userService.delete(this.currentuser.userId!).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/user']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
