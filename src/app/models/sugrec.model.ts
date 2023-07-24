import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class sugrecModule { }

export class sugrec {
    id?:number;
    nature?: string;
    type?: string;
    titre?: string;
    description?: string;
  }

export const dataset:Array<sugrec>=[
  {
    
  }
]
