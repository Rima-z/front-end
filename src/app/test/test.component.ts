import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
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
  

}
