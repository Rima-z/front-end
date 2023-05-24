import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { bordereau } from '../models/bordereau.model';




@Injectable({
    providedIn: 'root',
  })
export class bordereauService{

    private addUrl = 'http://localhost:8089/Stage/Bordereau/addb';
    private listUrl = 'http://localhost:8089/Stage/Bordereau/listeb';

    constructor(private http: HttpClient){
    }
    
    addBordereau(bordereau: bordereau): Observable<bordereau>{
        return this.http.post<bordereau>(this.addUrl, bordereau);
    }
    submitForm(formData: FormData): Observable<any> {
      const url = 'http://localhost:8089/Stage/Bordereau/addb';
      return this.http.post(url, formData);
    }
    getBordereauData(): Observable<any[]> {
      const url = 'http://localhost:8089/Stage/Bordereau/listeb'; // Replace with the actual endpoint to fetch sug_rec data
      return this.http.get<any[]>(url);
    }
}