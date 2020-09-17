import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"pages", component:PagesComponent, data:{animation:"isLeft"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RouteComps = [AppComponent,HomeComponent, PagesComponent, HeaderComponent];
