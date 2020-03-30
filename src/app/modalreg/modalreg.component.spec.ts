import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalregComponent } from './modalreg.component';

describe('ModalregComponent', () => {
  let component: ModalregComponent;
  let fixture: ComponentFixture<ModalregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
