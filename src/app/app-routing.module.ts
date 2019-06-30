import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'welcome/:name', component: WelcomeComponent},
  {path:'login', component: LoginComponent},
  {path:'todos', component: ListTodosComponent},
  {path:'logout', component: LogoutComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
