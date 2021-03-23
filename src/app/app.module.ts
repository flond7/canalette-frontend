import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* SERVICES */
import { ApiService } from './services/api.service'

/* COMPONENTS */
import { DbRowComponent } from './components/db-row/db-row.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { AnagraficComponent } from './components/anagrafic/anagrafic.component';

/* VIEWS */
import { HomeComponent } from './views/home/home.component';
import { TestViewComponent } from './views/test-view/test-view.component';
import { ListDrainComponent } from './views/list-drain/list-drain.component';
import { ListUsersComponent } from './views/list-users/list-users.component';
import { ListYearsComponent } from './views/list-years/list-years.component';
import { EditComponent } from './views/edit/edit.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AddComponent } from './views/add/add.component';
import { WarningComponent } from './components/warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    TestViewComponent,
    HomeComponent,
    ListDrainComponent,
    ListUsersComponent,
    ListYearsComponent,
    AnagraficComponent,
    
    DbRowComponent,
    TestComponentComponent,
    MenuComponent,
    ListComponent,
    EditComponent,
    SearchbarComponent,
    AddComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}