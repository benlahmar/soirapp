import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  p:number=0;

  @Output()
  notifier=new  EventEmitter();

  goto(x:number)
  {
    this.p=x;
    console.log(x);
    this.notifier.emit(this.p);
  }
}
