import { Component } from '@angular/core';

@Component({
  selector: 'app-rapportdent',
  templateUrl: './rapportdent.component.html',
  styleUrls: ['./rapportdent.component.css']
})
export class RapportdentComponent {
    generatePdffile(){
      window.print();
    }

}
