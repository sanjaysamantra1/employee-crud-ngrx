import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { rootReducer } from './ngrx/reducres/reducers';
import { myStore } from './ngrx/store/store';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    // StoreModule.forRoot(rootReducer)
    myStore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
