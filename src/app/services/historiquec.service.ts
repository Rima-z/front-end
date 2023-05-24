import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { historiquec } from "../models/historiquec.model";

@Injectable({
    providedIn: 'root',
  })

export class historiquecService {

    private addUrl = 'http://localhost:8089/Stage/Historiquec/addc';
    private listUrl = 'http://localhost:8089/Stage/Historiquec/listec';
    private deleteUrl = 'http://localhost:8089/Stage/Historiquec/deletec';

    constructor(private http: HttpClient){
    }

    addHistoriquec(historiquec: historiquec): Observable<historiquec>{
        return this.http.post<historiquec>(this.addUrl, historiquec);
    }
    submitForm(formData: FormData): Observable<any> {
      const url = 'http://localhost:8089/Stage/Historiquec/addc';
      return this.http.post(url, formData);
    }
    getHistoriquecData(): Observable<any[]> {
      const url = 'http://localhost:8089/Stage/Historiquec/listec'; // Replace with the actual endpoint to fetch sug_rec data
      return this.http.get<any[]>(url);
    }

}