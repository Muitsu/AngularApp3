import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {

  constructor(private router:Router){}
  goToDemo1(){
    this.router.navigateByUrl('/demo1');
  }
}
