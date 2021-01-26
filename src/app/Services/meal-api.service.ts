import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMeal } from '../ViewModels/imeal';

@Injectable({
  providedIn: 'root'
})
export class MealAPIService {

  constructor(private http: HttpClient) { }
  getAllMeals(): Observable <IMeal[]>
  {
    return this.http.get<IMeal[]>(`${environment.API_URL}/meals`);
  }
  getMealByCategoryID(catID: number): Observable <IMeal[]>
  {
    return this.http.get<IMeal[]>(`${environment.API_URL}/meals?categoryID=${catID}`)
  }
  getMealByID(pID:number): Observable <IMeal>
  {
    return this.http.get<IMeal>(`${environment.API_URL}/meals/${pID}`);
  }
}
