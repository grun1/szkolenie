import { Routes } from '@angular/router';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMovieListComponent } from './pages/page-movie-list/page-movie-list.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
      path: '',
      component: PageHomeComponent
    },
    {
      path: 'movies',
      component: PageMovieListComponent
    },
    {
      path: 'contact',
      component: PageContactComponent
    },
    {
      path: '##',
      component: PageNotFoundComponent
    }
  ];
