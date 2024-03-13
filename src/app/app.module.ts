import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AppMaterialModule } from './app.material.module';

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

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    KindListComponent,
    PriorityListComponent,
    ProjectListComponent,
    StatusListComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailsComponent,
    TicketListComponent,
    TicketCreateComponent,
    TicketDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
