import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sugrec } from '../models/sugrec.model';



@Injectable({
    providedIn: 'root',
  })
export class sugrecService{

    private addUrl = 'http://localhost:8089/Stage/SugRec/add';
    private listUrl = 'http://localhost:8089/Stage/SugRec/liste';
    private deleteUrl = 'http://localhost:8089/Stage';

    constructor(private http: HttpClient){
    }
    
    addSugRec(sugrec: sugrec): Observable<sugrec>{
        return this.http.post<sugrec>(this.addUrl, sugrec);
    }
    submitForm(formData: FormData): Observable<any> {
      const url = 'http://localhost:8089/Stage/SugRec/add';
      return this.http.post(url, formData);
    }
    getSugRecData(): Observable<any[]> {
      const url = 'http://localhost:8089/Stage/SugRec/liste'; // Replace with the actual endpoint to fetch sug_rec data
      return this.http.get<any[]>(url);
    }
    deleteSugRec(id: number): Observable<void> {
      const url = `${this.deleteUrl}/SugRec/delete/${id}`;
      return this.http.delete<void>(url);
    }
    
}