import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListDrainComponent } from './views/list-drain/list-drain.component';
import { ListUsersComponent } from './views/list-users/list-users.component';
import { ListYearsComponent } from './views/list-years/list-years.component';
import { AddComponent } from './views/add/add.component';
import { JoinedComponent } from './views/joined/joined.component';
import { CsvComponent } from './views/csv/csv.component';
import { TestViewComponent } from './views/test-view/test-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list-drain', component: ListDrainComponent },
  { path: 'list-user', component: ListUsersComponent },
  { path: 'list-year', component: ListYearsComponent },
  { path: 'add', component: AddComponent },
  { path: 'add-joined', component: JoinedComponent },
  { path: 'csv', component: CsvComponent },
  { path: 'test-view', component: TestViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
