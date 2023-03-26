import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateUserComponent } from './myComponents/add-update-user/add-update-user.component';
import { LoadUserComponent } from './myComponents/load-user/load-user.component';
import { NotfoundComponent } from './myComponents/notfound/notfound.component';

const routes: Routes = [
  {path:'users/add', component:AddUpdateUserComponent},
  {path:'users/edit/id', component:AddUpdateUserComponent},
  {path:'users', component:LoadUserComponent},
  {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
