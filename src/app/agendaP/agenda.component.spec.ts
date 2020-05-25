import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPComponent } from './agenda.component';

describe('AgendaComponent', () => {
  let component: AgendaPComponent;
  let fixture: ComponentFixture<AgendaPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
