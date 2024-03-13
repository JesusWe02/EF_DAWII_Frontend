import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  user = {
    username: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    is_active: false,
    kind: 0,
    created_at: '',
  };

  submitted = false;
  constructor(private userService: UserService) {}
  ngOnInit(): void {}

  createUser(): void {
    this.user.kind = Number(this.user.kind);
    const data = {
      username: this.user.username,
      name: this.user.name,
      lastname: this.user.lastname,
      email: this.user.email,
      password: this.user.password,
      is_active: true,
      kind: this.user.kind,
      created_at: this.user.created_at,
    };

    this.userService.create(data).subscribe({
      next: (response) => {
        console.log(response);
        this.submitted = true;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      username: '',
      name: '',
      lastname: '',
      email: '',
      password: '',
      is_active: false,
      kind: 0,
      created_at: '',
    };
  }
}
