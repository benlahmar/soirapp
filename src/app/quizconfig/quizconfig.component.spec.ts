import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizconfigComponent } from './quizconfig.component';

describe('QuizconfigComponent', () => {
  let component: QuizconfigComponent;
  let fixture: ComponentFixture<QuizconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizconfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
