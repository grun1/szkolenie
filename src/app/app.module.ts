import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { JumbotronDirective } from './directives/jumbotron.directive';
import { HideMeDirective } from './directives/hide-me.directive';
import { PageMovieListComponent } from './pages/page-movie-list/page-movie-list.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { MoveListItemComponent } from './components/move-list-item/move-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    JumbotronDirective,
    HideMeDirective,
    PageMovieListComponent,
    PageContactComponent,
    MoveListComponent,
    MoveListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
