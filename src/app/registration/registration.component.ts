import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl , ReactiveFormsModule,FormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
   
  name = new FormControl('',[Validators.required]);
  email= new FormControl('',[Validators.required,Validators.email]);
  
  myForm=new FormGroup(
    {
      name:this.name,
      email:this.email,
    }
  );
  onSubmit(){
    console.log(this.myForm.value);
  }
}
