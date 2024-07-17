import { Routes } from '@angular/router';
import { Quiz1Component } from './quiz1/quiz1.component';
import { QuizComponent } from './quiz/quiz.component';
import { ThemeComponent } from './theme/theme.component';

export const routes: Routes = [
    {path:"abc", component:Quiz1Component},
    {path:'quiz/:xyz',component:QuizComponent},
    {path:'',component:ThemeComponent}
];
