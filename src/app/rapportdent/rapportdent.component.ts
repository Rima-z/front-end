import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rapportdent',
  templateUrl: './rapportdent.component.html',
  styleUrls: ['./rapportdent.component.css']
})
export class RapportdentComponent {

  constructor(private router: Router, ) {
    
    
  
  }
    generatePdffile(){
      window.print();
    }
    redirectToTraitement() {
      this.router.navigate(['/traitement'], { replaceUrl: true });
    }
}
