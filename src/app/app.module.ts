import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { MovieListComponent } from './main/movie-list/movie-list.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './main/movie-card/movie-card.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule, FormsModule],
  declarations: [
    AppComponent,
    MainComponent,
    MovieListComponent,
    MovieCardComponent,
    NavbarComponent,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
