import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMovieListComponent } from './pages/page-movie-list/page-movie-list.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { routes } from './app-routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
