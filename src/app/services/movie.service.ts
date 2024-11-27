import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieParams, RapidAPIResponse } from '../types/movie.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private ENDPOINT = environment.rapidAPI.host;
  private http = inject(HttpClient);

  constructor() { }

  getMovies(params?: MovieParams): Observable<RapidAPIResponse> {
    return this.http.get<RapidAPIResponse>(`${this.ENDPOINT}/titles`, { params });
  }
}
