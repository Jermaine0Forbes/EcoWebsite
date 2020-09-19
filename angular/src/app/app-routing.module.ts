import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"pages", component:PagesComponent,data:{animation:"pages"} },
  {path:"services", component:ServicesComponent,data:{animation:"service"} },
  {path:"projects", component:ProjectsComponent,data:{animation:"project"} },
  {path:"news", component:NewsComponent, data:{animation:"news"}},
  {path:"contact", component:ContactComponent, data:{animation:"contact"}},
  {path:"login", component:LoginComponent, data:{animation:"login"}},
  {path:"register", component:RegisterComponent, data:{animation:"register"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RouteComps = [
  LoginComponent,
  RegisterComponent,
  ServicesComponent,
  ProjectsComponent,
  NewsComponent,
  ContactComponent,
  AppComponent,
  HomeComponent,
  PagesComponent,
   HeaderComponent
 ];
