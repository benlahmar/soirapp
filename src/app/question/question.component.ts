import { Component, Input } from '@angular/core';
import { OptionComponent } from '../option/option.component';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [OptionComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  @Input()
  dataquestion:Question;

  @Input()
  mode:any;

  isselected()
  {
   let op= this.dataquestion.options.filter(o=>o.selected==true)
   if(op.length>0)
    return true;
  else
  return false;
  }


  iscorrect()
  {
    return this.dataquestion.options.every(o=> o.selected==o.isAnswer)
  }

}
