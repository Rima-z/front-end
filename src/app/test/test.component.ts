import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  userForm: FormGroup;
  listData: any;
  constructor(private fb: FormBuilder){

    this.listData = [];
    this.userForm = this.fb.group({
      typeReclamations :['', Validators.required],
      titre : ['', Validators.required],
      description : ['', Validators.required]
    })
  }
  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }
  reset(){
    this.userForm.reset();
  }
  removeItem(element: any){
    this.listData.forEach((value: any,index: any)=>{
    if(value == element)
    this.listData.splice(index,1)
  });

  }


  ngOnInit() {
    
  }


}