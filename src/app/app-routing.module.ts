import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { KindListComponent } from './components/kind-list/kind-list.component';
import { PriorityListComponent } from './components/priority-list/priority-list.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { StatusListComponent } from './components/status-list/status-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketCreateComponent } from './components/tiket-create/ticket-create.component';
import { TicketDetailsComponent } from './components/tiket-details/ticket-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'kind', component: KindListComponent },
  { path: 'priority', component: PriorityListComponent },
  { path: 'project', component: ProjectListComponent },
  { path: 'status', component: StatusListComponent },
  { path: 'user', component: UserListComponent },
  { path: 'createUser', component: UserCreateComponent },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: 'ticket', component: TicketListComponent },
  { path: 'createTicket', component: TicketCreateComponent },
  { path: 'ticket/:id', component: TicketDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
