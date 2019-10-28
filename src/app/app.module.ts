import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TetPipe } from './tet.pipe';
 
import { AppRoutingModule, routingCompnents } from './app-routing/app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { RouterModule } from '@angular/router';
import { DepartementDetailComponent } from './departement-detail/departement-detail.component';
@NgModule({
  imports:      [ BrowserModule, RouterModule,FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent,routingCompnents],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
