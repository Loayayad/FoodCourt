import{ HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {IChefs} from '../ViewModels/ichefs';

@Injectable({
  providedIn: 'root'
})
export class ChefService {

  constructor(private http: HttpClient) { }
  getAllChefs():Observable<IChefs[]>{

    return this.http.get<IChefs[]>(`${environment.API_URL}/chefs`);
  }
  getChefsByID(cID:number):Observable<IChefs>
  {
    return this.http.get<IChefs>(`${environment.API_URL}/chefs/${cID}`);
  }
}
