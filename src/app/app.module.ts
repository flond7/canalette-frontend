import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxCsvParserModule } from 'ngx-csv-parser';

/* SERVICES */
import { ApiService } from './services/api.service';
import { ThemeService } from './services/theme.service';

/* COMPONENTS */
import { DbRowComponent } from './components/db-row/db-row.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListComponent } from './components/list/list.component';
import { AnagraficComponent } from './components/anagrafic/anagrafic.component';

/* VIEWS */
import { HomeComponent } from './views/home/home.component';
import { ListDrainComponent } from './views/list-drain/list-drain.component';
import { ListUsersComponent } from './views/list-users/list-users.component';
import { ListYearsComponent } from './views/list-years/list-years.component';
import { JoinedComponent } from './views/joined/joined.component';

import { EditComponent } from './views/edit/edit.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AddComponent } from './views/add/add.component';
import { WarningComponent } from './components/warning/warning.component';
import { AddJoinedComponent } from './components/add-joined/add-joined.component';
import { AnagUserComponent } from './components/anag-user/anag-user.component';
import { AnagDrainComponent } from './components/anag-drain/anag-drain.component';
import { AnagYearComponent } from './components/anag-year/anag-year.component';
import { CsvComponent } from './views/csv/csv.component';
import { BulkYearComponent } from './components/bulk-year/bulk-year.component';
import { AnagRelationsComponent } from './components/anag-relations/anag-relations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListDrainComponent,
    ListUsersComponent,
    ListYearsComponent,
    AnagraficComponent,
    CsvComponent,
    AnagUserComponent,
    AnagDrainComponent,
    AnagYearComponent,
    BulkYearComponent,
    
    DbRowComponent,
    TestComponentComponent,
    MenuComponent,
    ListComponent,
    EditComponent,
    SearchbarComponent,
    AddComponent,
    WarningComponent,
    AddJoinedComponent,
    JoinedComponent,
    AnagUserComponent,
    AnagDrainComponent,
    AnagYearComponent,
    BulkYearComponent,
    AnagRelationsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCsvParserModule,

  ],
  providers: [
    ApiService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}