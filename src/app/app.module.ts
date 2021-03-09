import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* COMPONENTS */
import { DbRowComponent } from './components/db-row/db-row.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';

/* VIEWS */
import { HomeComponent } from './views/home/home.component';
import { TestViewComponent } from './views/test-view/test-view.component';
import { ListDrainComponent } from './views/list-drain/list-drain.component';
import { ListUsersComponent } from './views/list-users/list-users.component';
import { ListYearsComponent } from './views/list-years/list-years.component';

@NgModule({
  declarations: [
    AppComponent,
    TestViewComponent,
    HomeComponent,
    ListDrainComponent,
    ListUsersComponent,
    ListYearsComponent,
    
    DbRowComponent,
    TestComponentComponent,
    MenuComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}