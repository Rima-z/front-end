import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historiqued',
  templateUrl: './historiqued.component.html',
  styleUrls: ['./historiqued.component.css']
})
export class HistoriquedComponent {
  constructor(private router: Router) { }
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


  
startDate: Date = new Date;
endDate: Date = new Date;
  

}
