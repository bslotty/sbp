import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [{ 
  path: '',
  redirectTo: 'home', 
  pathMatch: 'full',
  },{  
    path: 'home',
    component: HomeComponent,
  },{ 
    path: '**', 
    component: NotFoundComponent 
  }];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, /*{enableTracing: true}*/),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
