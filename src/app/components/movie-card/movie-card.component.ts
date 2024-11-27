import { ChangeDetectionStrategy, Component, input, OnChanges } from '@angular/core';
import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Movie } from 'src/app/types/movie.type';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent
  ]
})
export class MovieCardComponent  implements OnChanges {
  movie = input<Movie>();
  image!: string;

  constructor() { }

  ngOnChanges(): void {
    this.image = this.movie()?.primaryImage?.url as string
  }
}
