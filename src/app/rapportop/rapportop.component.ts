import { Component } from '@angular/core';

@Component({
  selector: 'app-rapportop',
  templateUrl: './rapportop.component.html',
  styleUrls: ['./rapportop.component.css']
})
export class RapportopComponent {

  startDate: Date = new Date;
  generatePdffile(){
    window.print();
  }

}
