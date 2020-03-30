import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModallogComponent } from './modallog.component';

describe('ModallogComponent', () => {
  let component: ModallogComponent;
  let fixture: ComponentFixture<ModallogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModallogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModallogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
