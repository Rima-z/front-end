import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sugrec',
  templateUrl: './sugrec.component.html',
  styleUrls: ['./sugrec.component.css']
})
export class SugrecComponent {
  constructor(private router: Router) { }
  redirectToProfil() {
    this.router.navigate(['/profil'], { replaceUrl: true });
  }
  redirectToDashboard() {
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }
  redirectToTraitement() {
    this.router.navigate(['/traitement'], { replaceUrl: true });
  }
  redirectToLogin() {
    this.router.navigate(['/login'], { replaceUrl: true });
  }
  redirectToHistoriquec() {
    this.router.navigate(['/historiquec'], { replaceUrl: true });
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
