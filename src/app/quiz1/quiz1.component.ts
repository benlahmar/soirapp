import { Component } from '@angular/core';
import { data } from '../dataquiz';

@Component({
  selector: 'app-quiz1',
  standalone: true,
  imports: [],
  templateUrl: './quiz1.component.html',
  styleUrl: './quiz1.component.css'
})
export class Quiz1Component {

  dataquiz=data
  page=0;

  goto(x:number)
  {
    if(x<0)
      this.page==0;
    else
    this.page=x
  }
}
