import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModallogComponent } from './modallog/modallog.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
