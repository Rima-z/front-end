import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { historiquecService } from '../services/historiquec.service';
import { bordereauService } from '../services/bordereau.service';
import { consultationService } from '../services/consultation.service';

@Component({
  selector: 'app-historiquec',
  templateUrl: './historiquec.component.html',
  styleUrls: ['./historiquec.component.css']
})
export class HistoriquecComponent implements OnInit {


  listc: any[]=[]
  listb: any[]=[]
  list: any[]=[]


  constructor(private router: Router, private historiquecService: historiquecService, private bordereauService:bordereauService, private consultationService: consultationService  ) { 

  }
  redirectToProfil() {
    this.router.navigate(['/profil'], { replaceUrl: true });
  }
  redirectToDashboard() {
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }
  redirectToLogin() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  redirectToHistoriquec() {
    this.router.navigate(['/historiquec'], { replaceUrl: true });
  }
  redirectToTraitement() {
    this.router.navigate(['/traitement'], { replaceUrl: true });
  }
  redirectToHistoriqued() {
    this.router.navigate(['/historiqued'], { replaceUrl: true });
  }
  redirectToSugrec() {
    this.router.navigate(['/sugrec'], { replaceUrl: true });
  }

  ngOnInit(): void {
    this.getHistoriquecData();
    this.getBordereauData();
    this.getConsultationData();
  }


  getHistoriquecData() {
    this.historiquecService.getHistoriquecData().subscribe(
      (response) => {
        this.listc = response; // Assuming the response is an array of objects
      },
      (error) => {
        console.error('Error fetching sug_rec data:', error);
      }
    );
  }

  getBordereauData() {
    this.bordereauService.getBordereauData().subscribe(
      (response) => {
        this.listb = response;
      },
      (error) => {
        console.error('Error fetching bordereau data:', error);
      }
    );
  }

  getConsultationData() {
    this.consultationService.getConsultationData().subscribe(
      (response) => {
        this.list = response;
      },
      (error) => {
        console.error('Error fetching Consultation data:', error);
      }
    );
  }



  startDate: Date = new Date;
endDate: Date = new Date;

}

