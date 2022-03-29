import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, from, Observable, of, pluck } from 'rxjs';
import { Platillo } from '../models/platillo.model';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  private API_URL = `http://www.themealdb.com/api`

  constructor(private http: HttpClient) { }

  fetchRandomPlatillo() {
    return this.http.get(`${this.API_URL}/json/v1/1/random.php`)
      .pipe(
        pluck('meals'),
        /* Maybe here can handle more better with a redux integration */
        catchError(error => of([]))
      );
  }

  fetchPlatilloById(id: number) {
    return this.http.get(`${this.API_URL}/json/v1/1/lookup.php?i=${id}`)
      .pipe(
        pluck('meals'),
        /* Maybe here can handle more better with a redux integration */
        catchError(error => of([]))
      );
  }
}
