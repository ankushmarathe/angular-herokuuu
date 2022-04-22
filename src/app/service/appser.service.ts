import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';


@Injectable({
  providedIn: 'root'
})
export class AppserService {
  
  constructor(private http:HttpClient) {

   }

  public getcat():Observable<Category[]> {
    return this.http.get<Category[]>("https://deploy-spring-ankush-3.herokuapp.com/Categories");
  }

}
