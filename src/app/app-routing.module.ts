import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { InoutComponent } from './inout/inout.component';
import { InoutAddComponent } from './inout-add/inout-add.component';
import { InoutDetailComponent } from './inout-detail/inout-detail.component';
import { InoutUpdateComponent } from './inout-update/inout-update.component';


const routes: Routes = [
  //{ path: 'users', component: UsersComponent },
  { path: 'users/list', component: UsersListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'user/update', component: UserUpdateComponent, pathMatch: 'full' },
  { path: 'user/detail', component: UserDetailComponent, pathMatch: 'full' },
  { path: 'inout', component: InoutComponent },
  { path: 'inout/add', component: InoutAddComponent },
  { path: 'inout/detail', component: InoutDetailComponent, pathMatch: 'full' },
  { path: 'inout/update', component: InoutUpdateComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
