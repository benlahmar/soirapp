import { Component } from '@angular/core';
import { themes } from '../datatheme';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {

  themes=themes
}
