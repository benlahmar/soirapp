import { Component, OnInit } from '@angular/core';
import { data } from '../dataquiz';
import { QuestionComponent } from '../question/question.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { Quiz } from '../models/quiz';
import { QuizconfigComponent } from '../quizconfig/quizconfig.component';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [QuestionComponent, DatePipe, PaginationComponent,QuizconfigComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{
  
  date:Date;

  dataquiz:Quiz;

  page=0;

  mode='quiz';
thematique:string
  constructor(private rr:ActivatedRoute)
  {
        
  }

  ngOnInit(): void {
    this.dataquiz=new Quiz(data);
    
    this.rr.params.subscribe(x=>this.thematique=x['xyz'])

    this.date=new Date;
   // setInterval(()=> this.date=new Date() ,1000)
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
