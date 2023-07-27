import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TableComponent } from './table/table.component';
import { GetTableComponent } from './get-table/get-table.component';
import { RouterStoreComponent } from './router-store/router-store.component';

const routes: Routes = [
  {path : '' , redirectTo: 'sign-up' , pathMatch: 'full'},
  {path:'sign-up',component:SignUpComponent},
  {path:'table',component:TableComponent},
  {path:'get-table',component:GetTableComponent},
  {path:'router-store',component:RouterStoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
