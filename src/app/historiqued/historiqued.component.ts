import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { historiquedService } from '../services/historiqued.service';

@Component({
  selector: 'app-historiqued',
  templateUrl: './historiqued.component.html',
  styleUrls: ['./historiqued.component.css']
})
export class HistoriquedComponent implements OnInit {


  listh: any[]=[]

  constructor(private router: Router, private historiquedService: historiquedService) { 



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
    this.getHistoriquedData();
  }
  
  getHistoriquedData() {
    this.historiquedService.getHistoriquedData().subscribe(
      (response) => {
        this.listh = response; // Assuming the response is an array of objects
      },
      (error) => {
        console.error('Error fetching sug_rec data:', error);
      }
    );
  }




  
startDate: Date = new Date;
endDate: Date = new Date;
  

}
