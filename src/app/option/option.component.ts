import { Component, Input } from '@angular/core';
import { Option } from '../models/option';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {

  @Input()
  rep:Option;
@Input()
  mode:any;
  
}
