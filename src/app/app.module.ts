import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { JumbotronDirective } from './directives/jumbotron.directive';
import { HideMeDirective } from './directives/hide-me.directive';
import { PageMovieListComponent } from './pages/page-movie-list/page-movie-list.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageMovieProfileComponent } from './pages/page-movie-profile/page-movie-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    JumbotronDirective,
    HideMeDirective,
    PageMovieListComponent,
    PageContactComponent,
    MovieListComponent,
    MovieListItemComponent,
    MenuComponent,
    PageNotFoundComponent,
    PageMovieProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
