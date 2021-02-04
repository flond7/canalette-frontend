import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* COMPONENTS */
import { DbRowComponent } from './components/db-row/db-row.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

/* VIEWS */
import { HomeComponent } from './views/home/home.component';
import { TestViewComponent } from './views/test-view/test-view.component';

@NgModule({
  declarations: [
    AppComponent,
    
    TestViewComponent,
    HomeComponent,
    
    DbRowComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
