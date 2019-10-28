import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { EmployeeListComponent } from './../employee-list/employee-list.component';
import { DepartementListComponent } from './../departement-list/departement-list.component';
import { DepartementDetailComponent } from './../departement-detail/departement-detail.component';
const routes : Routes = [
  {path :'', redirectTo: '/departement', pathMatch : 'full'},
  {path :'departement', component : DepartementListComponent},
  {path : 'departement/:id', component : DepartementDetailComponent},
  {path : 'employee', component : EmployeeListComponent},
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
//quand on ajoute de nouveaux modules on les déclare directement ici sont les rediclarer dans app.module.ts
export const routingCompnents = [DepartementListComponent, EmployeeListComponent,DepartementDetailComponent];
