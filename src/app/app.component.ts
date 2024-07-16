import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quiz1Component } from './quiz1/quiz1.component';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Quiz1Component, QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'soirapp';

  produit={"id":1,"desg":"clavier","prix":333,"qte":3}

produits=[{"id":2,"desg":"RAM","prix":3233,"qte":33},
  {"id":3,"desg":"CPU","prix":333,"qte":43},
  {"id":4,"desg":"HDD","prix":333,"qte":13},
  {"id":5,"desg":"Ecran HD","prix":33,"qte":22}
];

achter(x:any)
{
  x.qte--;
}
}
