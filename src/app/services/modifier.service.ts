import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { modifier } from '../models/modifier.model';



@Injectable({
    providedIn: 'root',
  })
export class modifierService{

    private addUrl = 'http://localhost:8089/Stage/Modifier/add';
    private listUrl = 'http://localhost:8089/Stage/Modifier/liste';
    private deleteUrl = 'http://localhost:8089/Stage/Modifier/delete';

    constructor(private http: HttpClient){
    }
    
    addModifier(modifier: modifier): Observable<modifier>{
        return this.http.post<modifier>(this.addUrl, modifier);
    }
    submitForm(formData: FormData): Observable<any> {
      const url = 'http://localhost:8089/Stage/Modifier/add';
      return this.http.post(url, formData);
    }
    getModifierData(): Observable<any[]> {
      const url = 'http://localhost:8089/Stage/Modifier/liste'; // Replace with the actual endpoint to fetch sug_rec data
      return this.http.get<any[]>(url);
    }
}