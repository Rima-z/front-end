import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { traitement } from '../models/traitement.model';




@Injectable({
    providedIn: 'root',
  })
export class traitementService{

    private addUrl = 'http://localhost:8089/Stage/Traitement/addt';
    private listUrl = 'http://localhost:8089/Stage/Traitement/listet';
    private deleteUrl = 'http://localhost:8089/Stage/SugRec/deletet';

    constructor(private http: HttpClient){
    }
    
    addTraitement(traitement: traitement): Observable<traitement>{
        return this.http.post<traitement>(this.addUrl, traitement);
    }
    submitForm(formData: FormData): Observable<any> {
      const url = 'http://localhost:8089/Stage/Traitement/addt';
      return this.http.post(url, formData);
    }
    getTraitementData(): Observable<any[]> {
      const url = 'http://localhost:8089/Stage/Traitement/listet'; // Replace with the actual endpoint to fetch sug_rec data
      return this.http.get<any[]>(url);
    }
}

export { traitement };
