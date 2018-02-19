import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoresultComponentComponent } from './noresult-component.component';

describe('NoresultComponentComponent', () => {
  let component: NoresultComponentComponent;
  let fixture: ComponentFixture<NoresultComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoresultComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoresultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
