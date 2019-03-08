import { Routes } from '@angular/router';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMovieListComponent } from './pages/page-movie-list/page-movie-list.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageMovieProfileComponent } from './pages/page-movie-profile/page-movie-profile.component';
import { PageAuthorsComponent } from './pages/page-authors/page-authors.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
      path: '',
      component: PageHomeComponent
    },
    {
      path: 'movies',
      children: [
        {
          path: '',
          component: PageMovieListComponent
        },
        {
          path: ':id',
          component: PageMovieProfileComponent
        }
      ]
    },
    {
      path: 'authors',
      component: PageAuthorsComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'contact',
      component: PageContactComponent
    },
    {
      path: 'user',
      loadChildren: '../user/user.module#UserModule'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];
