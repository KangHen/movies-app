import { Component, inject, OnInit, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonProgressBar } from '@ionic/angular/standalone';
import { MovieService } from '../services/movie.service';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, MovieCardComponent, IonProgressBar],
})
export class Tab1Page implements OnInit {
  private movieService = inject(MovieService);

  movies$ = this.movieService.getMovies({ limit: 10, startYear: 1990, endYear: new Date().getFullYear() });
  movies = signal<Array<any>>([]);

  isLoading = signal(true);

  constructor() {}

  ngOnInit() {
    this.movies$.subscribe(({ results }) => {
      this.isLoading.set(false);

      if (results) {
        this.movies.set(results);
      }
    });
  }
}
