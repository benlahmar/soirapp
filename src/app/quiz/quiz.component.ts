import { Component, OnInit } from '@angular/core';
import { data } from '../dataquiz';
import { QuestionComponent } from '../question/question.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { Quiz } from '../models/quiz';
import { QuizconfigComponent } from '../quizconfig/quizconfig.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent, PaginationComponent,QuizconfigComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
  

  dataquiz:Quiz;

  page=0;

  mode='quiz';

  ngOnInit(): void {
    this.dataquiz=new Quiz(data);
  }

  changermode(m:string)
  {
    this.mode=m;
    console.log(this.dataquiz)
  }
  recuperer(e:number)
  {
    console.log('parant recoit '+e);
    this.page=e;
  }
}
