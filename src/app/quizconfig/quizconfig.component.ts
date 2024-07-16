import { Component, Input, input } from '@angular/core';
import { QuizConfig } from '../models/quizconfig';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quizconfig',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quizconfig.component.html',
  styleUrl: './quizconfig.component.css'
})
export class QuizconfigComponent {

  @Input()
  data:QuizConfig;
}
